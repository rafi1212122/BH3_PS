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
                "latest": {
                    "name": "",
                    "version": "6.6.0",
                    "path": "https://hk-bigfile-os-mihayo.akamaized.net/ptpublic/bh3_overseas/20230512142327_G6kyVdzVWDuJ7iAG/BH3_v6.6.0_123423f2c8de.7z",
                    "size": "24370485760",
                    "md5": "242c7e38d98dee1d5f97593cb29d5bb3",
                    "entry": "BH3.exe",
                    "voice_packs": [],
                    "decompressed_path": "https://hk-bigfile-os-mihayo.akamaized.net/ptpublic/bh3_overseas/20230512142327_G6kyVdzVWDuJ7iAG/extract",
                    "segments": [],
                    "package_size": "12180000000"
                },
                "diffs": []
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
