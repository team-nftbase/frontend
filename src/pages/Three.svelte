<script>
  import * as THREE from "svelthree";
  import { onMount } from "svelte";
  import { MeshLambertMaterial } from "svelthree";

  let imageList = [];

  onMount(async () => {
    const res = await fetch(
      `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=500`
    );
    const { assets } = await res.json();
    imageList = assets.filter(
      (item) => item.animation_url || item.collection.image_url
    );
  });

  let groundTexture = new THREE.TextureLoader().load(
    "images/grasslight-big.jpg"
  );
  groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
  groundTexture.repeat.set(25, 25);
  groundTexture.anisotropy = 16;
  groundTexture.encoding = THREE.sRGBEncoding;
</script>

<THREE.Canvas let:sti w={window.innerWidth} h={700}>
  <THREE.Scene {sti} let:scene id="scene1" props={{ background: 0x000000 }}>
    <THREE.PerspectiveCamera
      {scene}
      id="cam1"
      pos={[100, 100, 100]}
      lookAt={[0, 0, 0]}
    />
    <THREE.AmbientLight {scene} intensity={1.25} />
    <THREE.DirectionalLight
      {scene}
      pos={[1, 2, 1]}
      intensity={0.8}
      shadowMapSize={512 * 8}
      castShadow
    />

    <THREE.Mesh
      {scene}
      geometry={new THREE.BoxBufferGeometry(1, 1, 1)}
      material={new THREE.MeshStandardMaterial()}
      mat={{ roughness: 0.5, metalness: 0.5, color: 0xff3e00 }}
      pos={[0, 0, 0]}
      rot={[0, 0, 0]}
      castShadow
      receiveShadow
    />
    {#each imageList as image, i}
      <THREE.Mesh
        {scene}
        geometry={new THREE.PlaneBufferGeometry(12, 17, 3)}
        material={new THREE.MeshBasicMaterial({
          map: new THREE.TextureLoader().load(
            image.animation_url
              ? image.animation_url
              : image.collection.image_url
          ),
          side: THREE.DoubleSide,
        })}
        pos={[-90 + (i % 10) * 20, Math.floor(i / 6) * 35 - 100, 0]}
        castShadow
        receiveShadow
      />
    {/each}

    <THREE.Mesh
      {scene}
      geometry={new THREE.BoxBufferGeometry(1, 1, 1)}
      material={new THREE.MeshStandardMaterial()}
      mat={{ roughness: 0.5, metalness: 0.5, color: 0xff3e00 }}
      pos={[0, 0, 0]}
      rot={[0, 0, 0]}
      castShadow
      receiveShadow
    />

    <THREE.Mesh
      {scene}
      geometry={new THREE.PlaneBufferGeometry(20000, 20000, 1)}
      material={new THREE.MeshLambertMaterial({
        map: groundTexture,
      })}
      mat={{
        roughness: 0.5,
        metalness: 0.5,
        side: THREE.DoubleSide,
        color: 0xf7fafc,
      }}
      pos={[0, -0.501, 0]}
      rot={[THREE.MathUtils.degToRad(-90), 0, 0]}
      scale={[1, 1, 1]}
      receiveShadow
    />

    <THREE.OrbitControls {scene} enableDamping />
  </THREE.Scene>

  <THREE.WebGLRenderer
    {sti}
    sceneId="scene1"
    camId="cam1"
    config={{ antialias: true, alpha: true }}
    enableShadowMap
    shadowMapType={THREE.PCFSoftShadowMap}
  />
</THREE.Canvas>
