import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { Skin } from '../Node/Skin';
import { SkinItemUI } from './SkinItemUI';
import { DataManager } from '../Manager/DataManager';
const { ccclass, property } = _decorator;

@ccclass('SpawnItemSkin')
export class SpawnItemSkin extends Component {
    @property(Prefab)
    itemPrefab: Prefab = null;

    @property(Node)
    contentItems: Node;

    item: Node;
    listSkin: Skin[];
    skinItemsUI: SkinItemUI;

    start() {
        this.listSkin = DataManager.instance.listGameSkin;
        for (let i = 0; i < this.listSkin.length; i++) {
            this.spawnItems(this.listSkin[i]);
        }
    }

    spawnItems(item: Skin) {
        this.item = instantiate(this.itemPrefab);
        this.contentItems.addChild(this.item);
        this.skinItemsUI = this.item.getComponent(SkinItemUI);
        this.skinItemsUI.init(item, this.node);
    }
}


