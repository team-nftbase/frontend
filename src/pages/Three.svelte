<script>
  import * as THREE from "svelthree";
  import { navigate } from "svelte-routing";
  import { onMount } from "svelte";
  import axios from "axios";
  import { base_url } from "common/properties.js";

  import gsap from "gsap";

  let imageList = [];

  onMount(async () => {
    const assets = await axios.post(
      base_url + "api/explore/selectListAll",
      null
    );
    imageList = assets.data.filter((item) => item.image_thumbnail);
  });

  let groundTexture = new THREE.TextureLoader().load(
    "images/grasslight-big.jpg"
  );
  groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
  groundTexture.repeat.set(50, 50);
  groundTexture.anisotropy = 4;
  groundTexture.encoding = THREE.sRGBEncoding;

  const triggerOnOverAni = (e) => {
    let obj = e.detail.target;
    gsap.to(obj.scale, {
      duration: 1,
      x: 1.5,
      y: 1.5,
      z: 1.5,
      ease: "elastic.out",
    });
  };

  const triggerOnOutAni = (e) => {
    let obj = e.detail.target;
    gsap.to(obj.scale, { duration: 1, x: 1, y: 1, z: 1, ease: "elastic.out" });
  };
</script>

<div class="container mx-auto">
  <THREE.Canvas let:sti w={1536} h={800} interactive>
    <THREE.Scene
      {sti}
      let:scene
      id="scene1"
      props={{
        background: 0xcce0ff,
        // fog: new THREE.Fog({
        //   color: 0xcce0ff,
        //   near: 500,
        //   far: 20000,
        // }),
      }}
    >
      <THREE.PerspectiveCamera
        {scene}
        id="cam1"
        pos={[300, 300, 300]}
        lookAt={[0, 0, 0]}
        props={{
          far: 20000,
        }}
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
        id="mesh_1"
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
          id="mesh_2"
          geometry={new THREE.PlaneBufferGeometry(24, 34, 3)}
          material={new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load(base_url+"images/"+image.image_thumbnail),
            side: THREE.DoubleSide,
          })}
          pos={[-90 + (i % 10) * 35, 40, Math.floor(i / 6) * 50 - 100]}
          interact
          onPointerOver={triggerOnOverAni}
          onPointerLeave={triggerOnOutAni}
          on:click={() => {
            navigate(
              `itemdetail/${image.asset_contract.address}/${image.token_id}`,
              { replace: true }
            );
          }}
          castShadow
          receiveShadow
        />
      {/each}

      <THREE.Mesh
        {scene}
        id="mesh_3"
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
        id="mesh_4"
        geometry={new THREE.PlaneBufferGeometry(20000, 20000, 1)}
        material={new THREE.MeshLambertMaterial({
          map: groundTexture,
        })}
        mat={{
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
</div>
