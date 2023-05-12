import LevelExcelTable from "../../resources/ExcelOutputAsset/StageData_Main.json";

export default class LevelData {
    private constructor() { }

    public static fromId(id: number) {
        return (LevelExcelTable as LevelExcelTable).find(e => e.levelId === id);
    }

    public static fromActId(actId: number) {
        return (LevelExcelTable as LevelExcelTable).filter(e => e.actId === actId);
    }

    public static nextLevelFromId(id: number) {
        const curLevel = (LevelExcelTable as LevelExcelTable).find(e => e.levelId === id)
        const higherLevels = (LevelExcelTable as LevelExcelTable).filter(e => e.levelId > id);
        const nextLevelInAct = higherLevels.find(l => l.actId === curLevel?.actId && l.IsActChallenge && l.levelId.toString()[0] === curLevel.levelId.toString()[0])

        if(nextLevelInAct) {
            return nextLevelInAct
        }else {
            return higherLevels[0]
        }
    }

    public static all() {
        return (LevelExcelTable as LevelExcelTable);
    }
}

type LevelExcelTable = {
    name: {
        hash: number
    }
    chapterId: number
    actId: number
    sectionId: number
    difficulty: number
    type: number
    tag: number[]
    battleType: number
    enterTimes: number
    resetType: number
    resetCoinID: number
    resetCostType: number
    resetTimes: number
    staminaCost: number
    avatarExpReward: number
    avatarExpInside: number
    scoinReward: number
    scoinInside: number
    maxScoinReward: number
    maxProgress: number
    HighlightDisplayDropIdList: number[]
    dropList: number[]
    recommendPlayerLevel: number
    unlockPlayerLevel: number
    unlockStarNum: number
    preLevelID: number[]
    displayTitle: {
        hash: number
    }
    displayDetail: {
        hash: number
    }
    briefPicPath: string
    detailPicPath: string
    luaFile: string
    challengeList: any[]
    IsActChallenge: boolean
    fastBonusTime: number
    sonicBonusTime: number
    hardLevel: number
    hardLevelGroup: number
    reviveTimes: number
    reviveCostType: number
    ReviveUseTypeList: any[]
    teamNum: number
    maxNumList: number[]
    restrictList: number[]
    loseDescList: {
        hash: number
    }[]
    RecordLevelType: number
    UseDynamicHardLv: number
    isTrunk: boolean
    MonsterAttrShow: number[]
    playerGetAllDrops: boolean
    HardCoeff: number
    enterTimesType: number
    isEnterWithElf: number
    PreMissionList: any[]
    LockedText: {
        hash: number
    }
    PreMissionLink: number
    PreMissionLinkParams: number[]
    PreMissionLinkParamStr: string
    UnlockedText: {
        hash: number
    }
    UnlockedLink: number
    UnlockedLinkParams: number[]
    UnlockedLinkParamStr: string
    costMaterialId: number
    costMaterialNum: number
    firstCostMaterialNum: number
    BalanceModeType: number
    StageEntryNameList: string[]
    FloatDrop: any[]
    IsBattleYLevel: boolean
    DataImpl: {}
    levelId: number
}[]