import React, { memo, VFC, useRef, useState } from "react"
import * as THREE from "three"
import { extend, useFrame, useLoader } from "@react-three/fiber"
import { shaderMaterial, useCursor } from "@react-three/drei"
import glsl from "glslify"

const Twitter: VFC = memo(() => {
  const tex = useLoader(THREE.TextureLoader, "tw.png")

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
        float time = uTick * 0.2;
        float sTime = sin(time) * 0.5 + 0.5;
        float delay = distance(vec2(0., 1.), uv) / distance(vec2(0., 1.), vec2(1., 0.));
        float x = clamp(sTime * 1.1 - delay * 0.1, 0., 1.);
        float progress = easeExpo(x);
        vec3 axis = vec3(0.2, 1.0, 0.2);
        pos.z += 0.05;
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
      position={[-0.66, 0, -1]}
      onClick={() => {
        window.open("https://twitter.com/eiske0805", "_blank")
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

export default Twitter
