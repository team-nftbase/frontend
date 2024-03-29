<script>
    import * as THREE from "svelthree";
    import { navigate } from "svelte-routing";
    import { onMount } from "svelte";
    import axios from "axios";
    import { base_url } from "common/properties.js";

    import gsap from "gsap";

    let imageList = [];
    let is_fullscreen = false;
    let height = 70;
    let zIndex = [1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 6, 5, 4, 3, 2, 1];
    let zIndex_123 = [1, 2, 3, 4, 5, 6, 6, 5, 4, 3, 2, 1];
    let rotIndex = [
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        -30,
        -30,
        -30,
        -30,
        -30,
        -30,
        -30,
        -30,
    ];
    let rotIndex_123 = [30, 30, 30, 30, 30, 30, -30, -30, -30, -30, -30, -30];

    onMount(async () => {
        const assets = await axios.post(
            base_url + "api/explore/selectListAll",
            null
        );
        imageList = assets.data
            .filter((item) => item.image_thumbnail)
            .slice(0, 12);
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
        gsap.to(obj.scale, {
            duration: 1,
            x: 1,
            y: 1,
            z: 1,
            ease: "elastic.out",
        });
    };

    function openFullscreen() {
        var elem = document.getElementById("showcase");
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            /* IE/Edge */
            elem.msRequestFullscreen();
        }
    }

    if (document.addEventListener) {
        document.addEventListener(
            "webkitfullscreenchange",
            fsChangeHandler,
            false
        );
        document.addEventListener(
            "mozfullscreenchange",
            fsChangeHandler,
            false
        );
        document.addEventListener("fullscreenchange", fsChangeHandler, false);
        document.addEventListener("MSFullscreenChange", fsChangeHandler, false);
    }
    function fsChangeHandler() {
        if (
            document.webkitIsFullScreen ||
            document.mozFullScreen ||
            document.msFullscreenElement !== undefined
        ) {
            is_fullscreen = true;
        } else {
            is_fullscreen = false;
        }
    }
</script>

<div id="showcase" class="flex justify-center relative">
    <THREE.Canvas let:sti w={1038} h={537} interactive>
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
                pos={[0, 120, 240]}
                rot={[0, 0, 0]}
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
                    geometry={new THREE.PlaneBufferGeometry(48, 68, 3)}
                    material={new THREE.MeshBasicMaterial({
                        map: new THREE.TextureLoader().load(
                            base_url + "resource/" + image.image_thumbnail
                        ),
                        side: THREE.DoubleSide,
                    })}
                    pos={[-340 + i * 60, height, -zIndex_123[i] * 40]}
                    rot={[0, (3.14 * rotIndex_123[i]) / 180, 0]}
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
            get
            config={{ antialias: true, alpha: true }}
            enableShadowMap
            shadowMapType={THREE.PCFSoftShadowMap}
        />
    </THREE.Canvas>
    {#if !is_fullscreen}
        <button
            id="fullscreen"
            class="absolute bg-black text-white rounded-lg"
            on:click={openFullscreen}>Enter showroom</button
        >
    {/if}
</div>

<style>
    #showcase {
        width: 100%;
        border: 0.5px solid #999999;
        border-radius: 15px;
        overflow: hidden;
    }

    #fullscreen {
        width: 318px;
        height: 72px;
        left: 360px;
        bottom: 0px;
    }
</style>
