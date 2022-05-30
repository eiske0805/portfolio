import React, { memo, VFC, useRef, useState } from "react"
import * as THREE from "three"
import { extend, useFrame, useLoader } from "@react-three/fiber"
import { shaderMaterial, useCursor } from "@react-three/drei"
import glsl from "glslify"

const Envelope: VFC = memo(() => {
  const tex = useLoader(THREE.TextureLoader, "env.png")

  const ShaderMaterial = shaderMaterial(
    { uTick: 0, uTex: tex },
    glsl`
      precision mediump float;
      #pragma glslify: easeBack = require(glsl-easings/back-in-out)
      #pragma glslify: rotate = require(glsl-rotate)
      varying vec2 vUv;
      uniform float uTick;
      const float HALF_PI = 1.570796327;
      void main() {
        vUv = uv;
        vec3 pos = position;
        pos.z += 0.15;
        float time = uTick * 0.01;
        vec3 axis = vec3(0.01, 0., 0.3);
        pos = rotate(pos, axis, 8.0 * HALF_PI * easeBack(sin(time)));
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
      position={[2, 0, -1.2]}
      onClick={() => {
        window.open("mailto:eiske.take@gmail.com", "_blank")
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

export default Envelope
