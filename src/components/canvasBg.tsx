import React, { useRef, VFC, memo, useMemo } from "react"
import { Canvas, useFrame, extend } from "@react-three/fiber"
import { shaderMaterial } from "@react-three/drei"
import * as THREE from "three"
import glsl from "glslify"

import { Box } from "@chakra-ui/react"

const Particles = () => {
  let count = 300
  const geometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const vertices = []
    for (let i = 0; i < count * 3; i++) {
      vertices[i] = (Math.random() - 0.5) * 4
    }
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    )
    return geometry
  }, [count])

  const ShaderMaterial = shaderMaterial(
    { uTick: 0 },
    glsl`
      precision mediump float;
      #pragma glslify: exponential = require(glsl-easings/exponential-out)
      #pragma glslify: easeBack = require(glsl-easings/back-in-out)
      #pragma glslify: easeCubic = require(glsl-easings/cubic-in-out)
      #pragma glslify: noise2 = require(glsl-noise/simplex/2d);
      #pragma glslify: noise3 = require(glsl-noise/simplex/3d);
      uniform float uTick;
      varying vec3 vPos;
      void main() {
        vec3 pos = position;
        float time = uTick * pos.x * 0.001;
        float speed = easeCubic(sin(time));
        float n = noise2(pos.xy * 10. - time);
        float n2 = noise3(vec3(pos - sin(time)));
        float n3 = noise3(vec3(pos.x * 10., pos.y * 50., speed));
        pos.x = n;
        pos.y = n2;
        pos.z = n3;
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = 1.5 * (1.5 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    // torVerShader,

    glsl`
      precision highp float;
      varying vec3 vPos;
      void main() {
        if( distance(gl_PointCoord, vec2(0.5, 0.5)) > 0.5) {
          discard;
        }
        gl_FragColor = vec4(0.8, 0.8, 0.8, 1.0);
      }
    `
  )
  extend({ ShaderMaterial })

  const ref = useRef<{ uTick: number }>()
  useFrame(({ clock }) => (ref.current!.uTick = clock.getElapsedTime()))

  return (
    <points>
      <primitive attach="geometry" object={geometry} />
      <shaderMaterial attach="material" ref={ref} />
    </points>
  )
}

const CanvasBg: VFC = memo(() => {
  return (
    <Box w="100vw" h="100vh" position="fixed" top="0" left="0">
      <Canvas camera={{ position: [0, 0, 0.5] }} linear={true}>
        <Particles />
      </Canvas>
    </Box>
  )
})

export default CanvasBg
