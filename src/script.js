import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

// Position
// mesh.position.x = 0.8
// mesh.position.y = - 0.5
// mesh.position.z = 0.2
mesh.position.set(0.8, - 0.5, 0.2)

// get the distance between the mesh and the center of the scene
// console.log(mesh.position.length())

// reduce the length of the vector to 1
// mesh.position.normalize()

// Scale
// mesh.scale.x = 1.5
// mesh.scale.y = 0.5
// mesh.scale.z = 0.3
mesh.scale.set(1.5, 0.5, 0.3)

// Rotation
mesh.rotation.reorder('YXZ') // reorder before changing the rotation
mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = Math.PI * 0.25

// scene.add(mesh)

// Group
const group = new THREE.Group()

group.position.y = 1
group.scale.y = 1.5
group.rotation.x = 1

scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
cube2.position.x = - 2
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
)
cube3.position.x = 2
group.add(cube3)

// Axes helper
const axesHelper = new THREE.AxesHelper(2) // 2 is the length of the axes
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.x = 0
camera.position.y = 0

// camera.lookAt(mesh.position)

scene.add(camera)

// get the distance between the mesh and another object (camera)
// console.log(mesh.position.distanceTo(camera.position))

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)