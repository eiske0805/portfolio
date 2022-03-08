import * as React from "react"
import { useRef, VFC, memo, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Mesh } from "three"
import { Box } from "@chakra-ui/react"

const Lines: VFC = memo(() => {
  const count = 30
  const [positions] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10
    }
    return [positions]
  }, [])
  const line = useRef<Mesh>()
  useFrame(() => {
    line.current.rotation.x += 0.0001
    line.current.rotation.z += 0.0002
  })
  return (
    <lineSegments ref={line}>
      <bufferGeometry>
        <bufferAttribute
          attachObject={["attributes", "position"]}
          count={positions.length / 3}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <lineBasicMaterial attach="material" color={"#e1e1e1"} linewidth={0.1} />
    </lineSegments>
  )
})

const CanvasBg: VFC = memo(() => {
  return (
    <Box w="100vw" h="100vh" position="fixed" top="0" left="0">
      <Canvas>
        <Lines />
      </Canvas>
    </Box>
  )
})

export default CanvasBg
