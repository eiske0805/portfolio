import React, { memo, VFC, useRef } from "react"
import * as THREE from "three"
import { extend, useFrame, useLoader } from "@react-three/fiber"
import { shaderMaterial } from "@react-three/drei"
import glsl from "glslify"

const CodeMesh: VFC = memo(() => {
  const tex = useLoader(THREE.TextureLoader, "code.png")

  const ShaderMaterial = shaderMaterial(
    { uTick: 0, uTex: tex },
    glsl`
      precision mediump float;
      #pragma glslify: exponential = require(glsl-easings/exponential-out)
      #pragma glslify: rotate = require(glsl-rotate)
      #pragma glslify: noise2 = require(glsl-noise/simplex/2d);
      #pragma glslify: noise3 = require(glsl-noise/simplex/3d);
      varying vec2 vUv;
      uniform float uTick;
      varying float vWave;
      const float HALF_PI = 1.570796327;
      void main() {
        vUv = uv;
        vec3 pos = position;
        float noiseFreq = 0.5;
        float noiseAmp = 0.02;
        vec3 noisePos = vec3(pos.x * noiseFreq, pos.y * exponential(uTick), pos.z + sin(uTick));
        pos.z += noise3(noisePos) * noiseAmp;
        vWave = pos.z;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
    glsl`
      precision highp float;
      varying vec2 vUv;
      varying float vWave;
      uniform sampler2D uTex;
      void main() {
        gl_FragColor = texture(uTex, vUv + vWave);
      }
    `
  )
  extend({ ShaderMaterial })

  const ref = useRef<{ uTick: number }>()
  useFrame(({ clock }) => (ref.current!.uTick = clock.getElapsedTime()))

  return (
    <mesh position={[0, 0, 0]}>
      <planeBufferGeometry args={[20, 20, 20, 20]} />
      <shaderMaterial
        ref={ref}
        transparent
        side={THREE.DoubleSide}
        blendSrc={THREE.OneFactor}
        blendDst={THREE.OneMinusSrcAlphaFactor}
        blendEquation={THREE.AddEquation}
      />
    </mesh>
  )
})

export default CodeMesh
