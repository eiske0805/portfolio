import React, { memo, VFC, useRef, useState } from "react"
import * as THREE from "three"
import { extend, useFrame, useLoader } from "@react-three/fiber"
import { shaderMaterial, useCursor } from "@react-three/drei"
import glsl from "glslify"

const Github: VFC = memo(() => {
  const tex = useLoader(THREE.TextureLoader, "git.png")
  const ShaderMaterial = shaderMaterial(
    { uTick: 0, uTex: tex },
    glsl`
      precision mediump float;
      #pragma glslify: easeExpo = require(glsl-easings/exponential-out)
      #pragma glslify: rotate = require(glsl-rotate)
      varying vec2 vUv;
      uniform float uTick;
      const float HALF_PI = 1.570796327;
      void main() {
        vUv = uv;
        vec3 pos = position;
        float time = uTick * 0.1;
        float cTime = cos(time) * 0.5 + 0.5;
        float progress = easeExpo(cTime);
        vec3 axis = vec3(0., 0., 1.);
        pos = rotate(pos, axis, 4.0 * HALF_PI * progress);      
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
    glsl`
    precision highp float;
    varying vec2 vUv;
    uniform sampler2D uTex;
    void main() {
      gl_FragColor = texture(uTex, vUv);
    }
    `
  )
  extend({ ShaderMaterial })
  const ref = useRef<{ uTick: number }>()
  useFrame(({ clock }) => (ref.current!.uTick = clock.getElapsedTime()))
  const [hovered, setHovered] = useState(false)
  useCursor(hovered)
  return (
    <mesh
      position={[-2, 0, -1]}
      onClick={() => {
        window.open("https://github.com/eiske0805", "_blank")
      }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <planeBufferGeometry args={[1, 1]} />
      <shaderMaterial
        ref={ref}
        transparent
        side={THREE.DoubleSide}
        blending={THREE.CustomBlending}
        blendSrc={THREE.OneFactor}
        blendDst={THREE.OneMinusSrcAlphaFactor}
        blendEquation={THREE.AddEquation}
      />
    </mesh>
  )
})

export default Github
