import React, { useRef, VFC, memo } from "react"
import { useFrame, extend, useLoader } from "@react-three/fiber"
import { shaderMaterial } from "@react-three/drei"
import * as THREE from "three"
import glsl from "glslify"

const HeroMesh: VFC = memo(() => {
  const [pTex, gTex] = useLoader(THREE.TextureLoader, [
    "portrail.png",
    "girl.png",
  ])

  const ShaderMaterial = shaderMaterial(
    {
      uTick: 0,
      uTexPo: pTex,
      uTexgi: gTex,
      uNoiseScale: new THREE.Vector2(3, 3),
    },
    glsl`
    precision mediump float;
    varying vec2 vUv;
    void main(){
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    glsl`
    precision mediump float;
    #pragma glslify: noise2 = require(glsl-noise/simplex/2d);
    #pragma glslify: noise3 = require(glsl-noise/simplex/3d);
    varying vec2 vUv;
    uniform vec3 uColor;
    uniform float uTick;
    uniform sampler2D uTexPo;
    uniform sampler2D uTexgi;
    uniform vec2 uNoiseScale;
    void main() {
      float time = uTick * 0.2;
      float progress =  cos(time)*0.5 + 0.5;
      float n = noise2(vec2(vUv.x * uNoiseScale.x, vUv.y * uNoiseScale.y));
      n = n * 0.5 - 0.5;
      n += progress;
      n = step(0.0, n);
      vec2 p = vUv;
      vec2 center = vec2(0.5, 0.5);
      float len = distance(p, center);
      float len2 = smoothstep(0.49, 0.5, len);
      float circle = 1. - len2;
      vec4 texPo = texture(uTexPo, vUv);
      vec4 texGi = texture(uTexgi, vUv);
      vec4 colorPo = texPo * circle;
      vec4 colorGi = texGi * circle;
      gl_FragColor = mix(colorGi,colorPo, n);
    }
  `
  )
  extend({ ShaderMaterial })

  const ref = useRef<{ uTick: number }>()
  useFrame(({ clock }) => (ref.current!.uTick = clock.getElapsedTime()))

  return (
    <mesh>
      <planeBufferGeometry args={[7.5, 7.5]} />
      <shaderMaterial attach="material" ref={ref} />
    </mesh>
  )
})

export default HeroMesh
