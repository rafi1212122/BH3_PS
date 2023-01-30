import { Request, Response } from "express";

export default function handler(req: Request, res: Response) {
	res.json({
        "data": {
            "deprecated_files": [],
            "deprecated_packages": [
                {
                    "md5": "e1e1b1214477cc33673aef711b873ada",
                    "name": "BH3_v6.2.0_277a0ec45b1d.7z"
                },
                {
                    "md5": "2b0c416864ba3be74ae2351432403c6b",
                    "name": "BH3_v6.1.0_62c4d9d7ab65.7z"
                },
                {
                    "md5": "c2b97d377e1b60a520cc9277dc2916ff",
                    "name": "BH3_v6.0.0_62c3cc1000d3.7z"
                },
                {
                    "md5": "0b172be284789bc507c0478c5fc7ec17",
                    "name": "BH3_v5.9.1_7a5666db8182.7z"
                },
                {
                    "md5": "72582abf02dd5204e258b0b07faec9c2",
                    "name": "BH3_v5.9.0_cba771e4ca76.7z"
                },
                {
                    "md5": "aad73d0657fefcdbabe5f14a823f6fc7",
                    "name": "BH3_v5.8.0_01a63f16c96d.7z"
                },
                {
                    "md5": "55002773f393f49d57695a2547f4d527",
                    "name": "BH3_v5.7.0_65c103afa352.7z"
                },
                {
                    "md5": "f7105cc5ed3028f07789b44d4522054d",
                    "name": "BH3_v5.6.0_4a51c6223034.7z"
                },
                {
                    "md5": "65f2ff4c827bd9a0fc2923af13b48685",
                    "name": "BH3_v5.5.0_d8d706b74ea2_os.7z"
                },
                {
                    "md5": "4de59c15db4b1b7a0e51527c40fc50d1",
                    "name": "BH3_v5.4.0_a7fc93719cdf_os.7z"
                }
            ],
            "force_update": null,
            "game": {
                "diffs": [],
                "latest": {
                    "decompressed_path": "https://hk-bigfile-os-mihayo.akamaized.net/ptpublic/bh3_overseas/20230106184825_GxvxzQ7QuwRsfCpW/extract",
                    "entry": "BH3.exe",
                    "md5": "0a23274b8c4ba6f109e8951ff81da21d",
                    "name": "",
                    "package_size": "10910000000",
                    "path": "https://hk-bigfile-os-mihayo.akamaized.net/ptpublic/bh3_overseas/20230106184825_GxvxzQ7QuwRsfCpW/BH3_v6.3.0_f79a08e4749f.7z",
                    "segments": [],
                    "size": "21830485760",
                    "version": "6.3.0",
                    "voice_packs": []
                }
            },
            "plugin": null,
            "pre_download_game": null,
            "sdk": null,
            "web_url": "https://honkaiimpact3.mihoyo.com/launcher"
        },
        "message": "OK",
        "retcode": 0
    });
}
