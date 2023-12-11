(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["414"],{59141:function(n,e,t){"use strict";n.exports=t.p+"static/image/40.fd10b1d1.png"},32425:function(n,e,t){"use strict";n.exports=t.p+"static/image/41.92a1f1b4.png"},9079:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return l}});var i=t("69051"),r=t("72525"),a=t("32425"),s=t("59141");function c(n){let e=Object.assign({h1:"h1",a:"a",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",img:"img",h3:"h3",pre:"pre",code:"code",ol:"ol",li:"li",ul:"ul",p:"p"},(0,r.useMDXComponents)(),n.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.h1,{id:"\u9E3F\u8499-6-\u534E\u4E3A\u95F9\u949F",children:["\u9E3F\u8499-6. \u534E\u4E3A\u95F9\u949F",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u9E3F\u8499-6-\u534E\u4E3A\u95F9\u949F",children:"#"})]}),"\n",(0,i.jsxs)(e.h2,{id:"\u9636\u6BB5\u6848\u4F8B-\u534E\u4E3A\u95F9\u949F",children:["\u9636\u6BB5\u6848\u4F8B-\u534E\u4E3A\u95F9\u949F",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\u9636\u6BB5\u6848\u4F8B-\u534E\u4E3A\u95F9\u949F",children:"#"})]}),"\n",(0,i.jsxs)(e.table,{children:["\n",(0,i.jsxs)(e.thead,{children:["\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.th,{children:"\u9996\u9875"}),"\n",(0,i.jsx)(e.th,{children:"\u8BE6\u60C5\u9875"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.tbody,{children:["\n",(0,i.jsxs)(e.tr,{children:["\n",(0,i.jsx)(e.td,{children:(0,i.jsx)("img",{src:s,width:"320"})}),"\n",(0,i.jsx)(e.td,{children:(0,i.jsx)("img",{src:a,width:"320"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.h3,{id:"1-\u9875\u9762\u7ED3\u6784-\u9996\u9875\u7ED3\u6784",children:["1. \u9875\u9762\u7ED3\u6784-\u9996\u9875\u7ED3\u6784",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#1-\u9875\u9762\u7ED3\u6784-\u9996\u9875\u7ED3\u6784",children:"#"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",meta:'title="pages/Index.ets"',children:"import { CanvasComp } from '../components/CanvasComp'\nimport { ClockItemComp } from '../components/ClockItemComp'\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Stack({ alignContent: Alignment.Bottom }){\n      Column({ space: 15 }) {\n        Text('\u95F9\u949F')\n          .fontSize('24')\n          .width('100%')\n\n        CanvasComp()\n\n        ForEach([1, 2, 3], () => {\n          ClockItemComp()\n            .onClick(() => {\n              router.pushUrl({\n                url: 'pages/DetailPage',\n              })\n            })\n        })\n      }\n      .padding(15)\n      .height('100%')\n      .width('100%')\n      .backgroundColor('#f5f5f5')\n      // \u6DFB\u52A0\n      Text('+')\n        .width(50)\n        .aspectRatio(1)\n        .backgroundColor('#06f')\n        .fontSize(40)\n        .fontWeight(100)\n        .fontColor('#fff')\n        .borderRadius(25)\n        .textAlign(TextAlign.Center)\n        .margin({ bottom: 50 })\n        .onClick(() => {\n          router.pushUrl({\n            url: 'pages/DetailPage',\n          })\n        })\n    }\n  }\n}\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",meta:'title="components/CanvasComp.ets"',children:"@Component\nexport struct CanvasComp {\n  build() {\n    \n  }\n}\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",meta:'title="components/ClockItemComp.ets"',children:"@Component\nexport struct ClockItemComp {\n  build() {\n    \n  }\n}\n"})}),"\n",(0,i.jsxs)(e.h3,{id:"2-\u9875\u9762\u7ED3\u6784-\u7ED8\u5236\u95F9\u949F",children:["2. \u9875\u9762\u7ED3\u6784-\u7ED8\u5236\u95F9\u949F",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#2-\u9875\u9762\u7ED3\u6784-\u7ED8\u5236\u95F9\u949F",children:"#"})]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u7ED8\u5236\u8868\u76D8"}),"\n",(0,i.jsx)(e.li,{children:"\u7ED8\u5236 \u65F6\u5206\u79D2 \u6307\u9488"}),"\n",(0,i.jsx)(e.li,{children:"\u8D70\u8D77\u6765"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"@Component\nexport struct CanvasComp {\n  private settings = new RenderingContextSettings(true)\n  private context = new CanvasRenderingContext2D(this.settings)\n  private panImg = new ImageBitmap('/images/ic_clock_pan.png')\n  private hourImg = new ImageBitmap('/images/ic_hour_pointer.png')\n  private minuteImg = new ImageBitmap('/images/ic_minute_pointer.png')\n  private secondImg = new ImageBitmap('/images/ic_second_pointer.png')\n\n  // \u753B\u5E03\u5C3A\u5BF8\n  canvasSize = 252\n  // \u6307\u9488\u5C3A\u5BF8\n  pointerWidth = 8\n\n  startDraw() {\n    this.drawClock()\n    setInterval(() => {\n      this.drawClock()\n    }, 1000)\n  }\n\n  /**\n   * \u7ED8\u5236\u95F9\u949F\n   */\n  drawClock() {\n    this.context.clearRect(0, 0, this.canvasSize, this.canvasSize)\n    this.context.drawImage(this.panImg, 0, 0, this.canvasSize, this.canvasSize)\n    // \u6839\u636E\u65F6\u95F4\u7ED8\u5236\u6307\u9488\n    const date = new Date()\n    const hour = date.getHours()\n    const minute = date.getMinutes()\n    const second = date.getSeconds()\n    this.drawPointer(this.hourImg, hour % 12 / 12 * 360)\n    this.drawPointer(this.minuteImg, minute / 60 * 360)\n    this.drawPointer(this.secondImg, second / 60 * 360)\n  }\n\n  /**\n   * \u7ED8\u5236\u6307\u9488\n   * @param img - \u6307\u9488\u56FE\u7247\n   * @param angle - \u65CB\u8F6C\u89D2\u5EA6\uFF0C\u8D77\u70B9\u662F Y \u8F74\u4E0A\u65B9\u5411\n   */\n  drawPointer(img: ImageBitmap, angle: number) {\n    this.context.save()\n    this.context.translate(this.canvasSize / 2, this.canvasSize / 2)\n    this.context.rotate((angle + 180) * Math.PI / 180)\n    this.context.translate(-this.canvasSize / 2, -this.canvasSize / 2)\n    this.context.drawImage(img, this.canvasSize / 2 - this.pointerWidth / 2, 0, this.pointerWidth, this.canvasSize)\n    this.context.restore()\n  }\n\n  build() {\n    Canvas(this.context)\n      .width(this.canvasSize)\n      .aspectRatio(1)\n      .onReady(() => {\n        this.startDraw()\n      })\n  }\n}\n"})}),"\n",(0,i.jsxs)(e.h3,{id:"3-\u9875\u9762\u7ED3\u6784-\u7ED8\u5236\u95F9\u949F\u4EFB\u52A1\u5217\u8868",children:["3. \u9875\u9762\u7ED3\u6784-\u7ED8\u5236\u95F9\u949F\u4EFB\u52A1\u5217\u8868",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#3-\u9875\u9762\u7ED3\u6784-\u7ED8\u5236\u95F9\u949F\u4EFB\u52A1\u5217\u8868",children:"#"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"@Component\nexport struct ClockItemComp {\n  build() {\n    Row(){\n      Column({ space: 5 }) {\n        Row({ space: 5 }){\n          Text('\u4E0B\u5348')\n            .fontColor('#666')\n          Text('04:30')\n            .fontWeight(600)\n            .fontSize(18)\n        }\n        Row({ space: 15 }){\n          Text('\u95F9\u949F')\n            .fontColor('#999')\n            .fontSize(14)\n          Text('\u4E0D\u91CD\u590D')\n            .fontColor('#999')\n            .fontSize(14)\n        }\n      }\n      .alignItems(HorizontalAlign.Start)\n\n      // \u5F00\u5173\n      Toggle({ type: ToggleType.Switch , isOn: true })\n    }\n    .height(64)\n    .padding({ left: 20, right: 15 })\n    .width('100%')\n    .backgroundColor('#fff')\n    .borderRadius(30)\n    .justifyContent(FlexAlign.SpaceBetween)\n  }\n}\n"})}),"\n",(0,i.jsxs)(e.h3,{id:"4-\u9875\u9762\u7ED3\u6784-\u8BE6\u60C5\u9875",children:["4. \u9875\u9762\u7ED3\u6784-\u8BE6\u60C5\u9875",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#4-\u9875\u9762\u7ED3\u6784-\u8BE6\u60C5\u9875",children:"#"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"@Entry\n@Component\nstruct DetailPage {\n\n  submit () {\n    // TODO\n  }\n\n  @Builder\n  CellBuilder (title: string, value: string) {\n    Row(){\n      Text(title)\n        .layoutWeight(1)\n      Text(value)\n        .fontColor('#999')\n      Image('/images/ic_public_arrow_right.svg')\n        .width(18)\n        .aspectRatio(1)\n        .fillColor('#999')\n    }\n    .height(60)\n    .padding({ left: 15, right: 15 })\n    .backgroundColor('#fff')\n  }\n\n  build() {\n    Navigation(){\n      Column({ space: 15 }){\n        TimePicker()\n          .borderRadius(16)\n          .clip(true)\n\n        Column({ space: 1 }){\n          this.CellBuilder('\u95F9\u94C3\u540D\u79F0', '\u95F9\u94C3')\n          this.CellBuilder('\u91CD\u590D', '\u4E0D\u91CD\u590D')\n        }\n        .borderRadius(16)\n        .clip(true)\n\n        Text('\u5220\u9664\u95F9\u94C3')\n          .width(100)\n          .height(40)\n          .borderRadius(20)\n          .backgroundColor('#c3c4c5')\n          .textAlign(TextAlign.Center)\n          .fontColor('#f00')\n          .opacity(0.3)\n      }\n      .padding(15)\n    }\n    .title('\u65B0\u5EFA\u95F9\u949F')\n    .titleMode(NavigationTitleMode.Mini)\n    .mode(NavigationMode.Stack)\n    .backgroundColor('#f5f5f5')\n    .menus([\n      { value: '', icon: '/images/ic_confirm.png', action: () => this.submit() }\n    ])\n  }\n}\n"})}),"\n",(0,i.jsxs)(e.h3,{id:"5-\u4E1A\u52A1\u903B\u8F91-\u9996\u9009\u9879\u5B58\u50A8\u5DE5\u5177",children:["5. \u4E1A\u52A1\u903B\u8F91-\u9996\u9009\u9879\u5B58\u50A8\u5DE5\u5177",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#5-\u4E1A\u52A1\u903B\u8F91-\u9996\u9009\u9879\u5B58\u50A8\u5DE5\u5177",children:"#"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u521B\u5EFA\u9996\u9009\u9879\u5B58\u50A8\u5DE5\u5177\u7C7B"}),"\n",(0,i.jsx)(e.li,{children:"\u83B7\u53D6\u9996\u9009\u9879\u5B9E\u4F8B"}),"\n",(0,i.jsx)(e.li,{children:"\u8BBE\u7F6E\u548C\u4FEE\u6539\u95F9\u949F\u4FE1\u606F"}),"\n",(0,i.jsx)(e.li,{children:"\u5220\u9664\u95F9\u949F\u4FE1\u606F"}),"\n",(0,i.jsx)(e.li,{children:"\u83B7\u53D6\u6240\u6709\u7684\u95F9\u949F\u4FE1\u606F"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"import preferences from '@ohos.data.preferences'\n\nexport class ClockItem {\n  hour?: number\n  minute?: number\n  id?: string\n  reminderId?: number\n  enabled?: boolean\n}\n\nexport class ClockStore {\n\n  getStore() {\n    return preferences.getPreferences(getContext(this), 'clockStore')\n  }\n\n  async addClock(clockItem: ClockItem) {\n    const store = await this.getStore()\n    await store.put(clockItem.id, JSON.stringify(clockItem))\n    await store.flush()\n  }\n\n  async delClock(id: string) {\n    const store = await this.getStore()\n    await store.delete(id)\n    await store.flush()\n  }\n\n  async getAllClock() {\n    const store = await this.getStore()\n    const data = await store.getAll()\n    const list = Object.keys(data).map<ClockItem>(key => {\n      return JSON.parse(data[key])\n    })\n    return list\n  }\n}\n"})}),"\n",(0,i.jsxs)(e.h3,{id:"6-\u4E1A\u52A1\u903B\u8F91-\u6DFB\u52A0\u95F9\u949F\u4EFB\u52A1",children:["6. \u4E1A\u52A1\u903B\u8F91-\u6DFB\u52A0\u95F9\u949F\u4EFB\u52A1",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#6-\u4E1A\u52A1\u903B\u8F91-\u6DFB\u52A0\u95F9\u949F\u4EFB\u52A1",children:"#"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7ED1\u5B9A\u65F6\u95F4\u9009\u62E9\u7EC4\u4EF6\uFF0C\u56DE\u6536\u9009\u4E2D\u540E\u7684\u65F6\u95F4\u6570\u636E"}),"\n",(0,i.jsx)(e.li,{children:"\u5F00\u542F\u63D0\u9192"}),"\n",(0,i.jsx)(e.li,{children:"\u4FDD\u5B58\u5230\u9996\u9009\u9879"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"  @State\n  clockItem: ClockItem = {}\n\n  // Date \u4E0D\u80FD\u76F4\u63A5\u4F7F\u7528 @State \u88C5\u9970\u5668\n  @State\n  state: { now: Date } = { now: new Date() }\n  clockStore = new ClockStore()\n\n  async submit() {\n\n    // 1. \u5F00\u542F\u63D0\u9192\n    const hour = this.state.now.getHours()\n    const minute = this.state.now.getMinutes()\n    const request: reminderAgentManager.ReminderRequestAlarm = {\n      reminderType: reminderAgentManager.ReminderType.REMINDER_TYPE_ALARM,\n      hour,\n      minute,\n      title: '\u95F9\u949F',\n      ringDuration: 60\n    }\n    const reminderId = await reminderAgentManager.publishReminder(request)\n    // 2. \u8BB0\u5F55\u6570\u636E\n    this.clockItem = {\n      hour,\n      minute,\n      id: util.generateRandomUUID(),\n      reminderId,\n      enabled: true\n    }\n    await this.clockStore.addClock(this.clockItem)\n    promptAction.showToast({ message: '\u6DFB\u52A0\u95F9\u949F\u6210\u529F' })\n    router.back()\n  } \n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"        TimePicker({\n          selected: this.state.now\n        })\n          .borderRadius(16)\n          .clip(true)\n"})}),"\n",(0,i.jsxs)(e.h3,{id:"7-\u4E1A\u52A1\u903B\u8F91-\u6E32\u67D3\u95F9\u949F\u4EFB\u52A1\u5217\u8868",children:["7. \u4E1A\u52A1\u903B\u8F91-\u6E32\u67D3\u95F9\u949F\u4EFB\u52A1\u5217\u8868",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#7-\u4E1A\u52A1\u903B\u8F91-\u6E32\u67D3\u95F9\u949F\u4EFB\u52A1\u5217\u8868",children:"#"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u83B7\u53D6\u9996\u9009\u9879\u95F9\u949F\u6570\u636E"}),"\n",(0,i.jsx)(e.li,{children:"\u904D\u5386\u6570\u7EC4"}),"\n",(0,i.jsx)(e.li,{children:"\u53BB\u95F9\u949F\u9879\u7EC4\u4EF6\u6E32\u67D3"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"1\uFF09 \u83B7\u53D6\u9996\u9009\u9879\u95F9\u949F\u6570\u636E"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"  @State\n  clockList: ClockItem[] = []\n\n  clockStore = new ClockStore()\n\n  aboutToAppear() {\n    this.initData()\n  }\n  onPageShow() {\n    this.initData()\n  }\n  async initData() {\n    this.clockList = await this.clockStore.getAllClock()\n  }\n"})}),"\n",(0,i.jsx)(e.p,{children:"2\uFF09 \u904D\u5386\u6570\u7EC4"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"        ForEach(this.clockList, (item: ClockItem) => {\n          ClockItemComp({ item })\n            .onClick(() => {\n              router.pushUrl({\n                url: 'pages/DetailPage',\n                params: item\n              })\n            })\n        })\n"})}),"\n",(0,i.jsx)(e.p,{children:"3\uFF09 \u53BB\u95F9\u949F\u9879\u7EC4\u4EF6\u6E32\u67D3"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"  @State\n  item: ClockItem = {}\n\n  padZero(val: number = 0) {\n    return val.toString().padStart(2, '0')\n  }\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"        Row({ space: 5 }) {\n          Text(this.item.hour > 12 ? '\u4E0B\u5348' : '\u4E0A\u5348')\n            .fontColor('#666')\n          Text(`${this.padZero(this.item.hour > 12 ? this.item.hour - 12 : this.item.hour)}:${this.padZero(this.item.minute)}`)\n            .fontWeight(600)\n            .fontSize(18)\n        }\n"})}),"\n",(0,i.jsxs)(e.h3,{id:"8-\u4E1A\u52A1\u903B\u8F91-\u4FEE\u6539\u95F9\u94C3\u4EFB\u52A1",children:["8. \u4E1A\u52A1\u903B\u8F91-\u4FEE\u6539\u95F9\u94C3\u4EFB\u52A1",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#8-\u4E1A\u52A1\u903B\u8F91-\u4FEE\u6539\u95F9\u94C3\u4EFB\u52A1",children:"#"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4F20\u9012\u95F9\u94C3\u6570\u636E\u5230\u8BE6\u60C5\u9875\uFF0C\u9700\u8981\u63A5\u6536\u4E0B"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u9875\u9762\u4E0A\u7684\u6807\u9898\u9700\u8981\u5224\u65AD\u663E\u793A"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5728 submit \u51FD\u6570\u4E2D\u52A0\u5165\u7F16\u8F91\u903B\u8F91"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"1\uFF09\u4F20\u9012\u95F9\u94C3\u6570\u636E\u5230\u8BE6\u60C5\u9875\uFF0C\u9700\u8981\u63A5\u6536\u4E0B"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",meta:'title="DetailPage.ets"',children:"  aboutToAppear() {\n    const params = router.getParams() as ClockItem\n    if (params && params.id) {\n      this.clockItem = { ...params }\n      this.state.now.setHours(this.clockItem.hour)\n      this.state.now.setMinutes(this.clockItem.minute)\n    }\n  }\n"})}),"\n",(0,i.jsx)(e.p,{children:"2\uFF09\u9875\u9762\u4E0A\u7684\u6807\u9898\u9700\u8981\u5224\u65AD\u663E\u793A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-diff",meta:'title="DetailPage.ets"',children:"+    .title((this.clockItem.id ? '\u7F16\u8F91' : '\u6DFB\u52A0') + '\u95F9\u949F')\n    .titleMode(NavigationTitleMode.Mini)\n    .mode(NavigationMode.Stack)\n"})}),"\n",(0,i.jsx)(e.p,{children:"3\uFF09\u5728 submit \u51FD\u6570\u4E2D\u52A0\u5165\u7F16\u8F91\u903B\u8F91"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",meta:'title="DetailPage.ets"',children:"      // 2. \u8BB0\u5F55\u6570\u636E\n      if (this.clockItem.id) {\n        this.clockItem.hour = hour\n        this.clockItem.minute = minute\n        this.clockItem.enabled = true\n        // \u4E0D\u52A0 await \u8BA9\u5B83\u5F02\u6B65\u6267\u884C\uFF0C\u56E0\u4E3A\u53EF\u80FD\u5B58\u5728\u5931\u6548\u7684\u4EE3\u7406\u63D0\u9192\uFF0C\u8FD9\u6837\u4E0D\u4F1A\u963B\u788D\u540E\u7EED\u903B\u8F91\n        reminderAgentManager.cancelReminder(this.clockItem.reminderId)\n        this.clockItem.reminderId = reminderId\n        await this.clockStore.addClock(this.clockItem)\n        promptAction.showToast({ message:'\u7F16\u8F91\u95F9\u949F\u6210\u529F' })\n      } else {\n        this.clockItem = {\n          hour,\n          minute,\n          id: util.generateRandomUUID(),\n          reminderId,\n          enabled: true\n        }\n        await this.clockStore.addClock(this.clockItem)\n        promptAction.showToast({ message:'\u6DFB\u52A0\u95F9\u949F\u6210\u529F' })\n      }\n"})}),"\n",(0,i.jsxs)(e.h3,{id:"9-\u4E1A\u52A1\u903B\u8F91-\u5220\u9664\u95F9\u949F\u4EFB\u52A1",children:["9. \u4E1A\u52A1\u903B\u8F91-\u5220\u9664\u95F9\u949F\u4EFB\u52A1",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#9-\u4E1A\u52A1\u903B\u8F91-\u5220\u9664\u95F9\u949F\u4EFB\u52A1",children:"#"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5220\u9664\u6309\u94AE\u5728\u7F16\u8F91\u6761\u4EF6\u4E0B\u5C55\u793A\uFF0C\u7ED1\u5B9A\u4E8B\u4EF6\u51FD\u6570"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5B9E\u73B0\u5220\u9664\u529F\u80FD"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"1\uFF09\u5220\u9664\u6309\u94AE\u5728\u7F16\u8F91\u6761\u4EF6\u4E0B\u5C55\u793A\uFF0C\u7ED1\u5B9A\u4E8B\u4EF6\u51FD\u6570"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",meta:'title="DetailPage.ets"',children:"        if ( this.clockItem.id ) {\n          Text('\u5220\u9664\u95F9\u94C3')\n            .width(100)\n            .height(40)\n            .borderRadius(20)\n            .backgroundColor('#c3c4c5')\n            .textAlign(TextAlign.Center)\n            .fontColor('#f00')\n            .opacity(0.3)\n            .onClick(() => {\n              this.remove()\n            })\n        }\n"})}),"\n",(0,i.jsx)(e.p,{children:"2\uFF09\u5B9E\u73B0\u5220\u9664\u529F\u80FD"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"  async remove () {\n    try {\n      await this.clockStore.delClock(this.clockItem.id)\n      promptAction.showToast({ message: '\u5220\u9664\u95F9\u949F\u6210\u529F' })\n      // \u4E0D\u52A0 await \u8BA9\u5B83\u5F02\u6B65\u6267\u884C\uFF0C\u56E0\u4E3A\u53EF\u80FD\u5B58\u5728\u5931\u6548\u7684\u4EE3\u7406\u63D0\u9192\uFF0C\u8FD9\u6837\u4E0D\u4F1A\u963B\u788D\u8DF3\u8F6C\n      reminderAgentManager.cancelReminder(this.clockItem.reminderId)\n      router.back()\n    } catch (e) {\n      console.error('CLOCK-REMOVE', e.message)\n    }\n  }\n"})}),"\n",(0,i.jsxs)(e.h3,{id:"10-\u4E1A\u52A1\u903B\u8F91-\u901A\u77E5\u5524\u8D77\u5E94\u7528\u548C\u5173\u95ED\u5EF6\u65F6",children:["10. \u4E1A\u52A1\u903B\u8F91-\u901A\u77E5\u5524\u8D77\u5E94\u7528\u548C\u5173\u95ED\u5EF6\u65F6",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#10-\u4E1A\u52A1\u903B\u8F91-\u901A\u77E5\u5524\u8D77\u5E94\u7528\u548C\u5173\u95ED\u5EF6\u65F6",children:"#"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u62BD\u53D6\u521B\u5EFA\u540E\u53F0\u4EE3\u7406\u5DE5\u5177\u7C7B"}),"\n",(0,i.jsx)(e.li,{children:"\u52A0\u5165\u5524\u8D77\u914D\u7F6E\uFF0C\u52A0\u5165\u5EF6\u65F6\u548C\u5173\u95ED\u914D\u7F6E"}),"\n",(0,i.jsx)(e.li,{children:"\u8FDB\u884C\u590D\u7528"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"1\uFF09\u52A0\u5165\u5524\u8D77\u914D\u7F6E\uFF0C\u52A0\u5165\u5EF6\u65F6\u548C\u5173\u95ED\u914D\u7F6E"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",meta:'title="utils/alarmManager.ets"',children:"      // \u8DF3\u8F6C\n      wantAgent: {\n        pkgName: 'com.itcast.myapplication',\n        abilityName: 'EntryAbility'\n      },\n      // \u64CD\u4F5C\u6309\u94AE\n      actionButton: [\n        { title: '\u5173\u95ED', type: reminderAgentManager.ActionButtonType.ACTION_BUTTON_TYPE_CLOSE },\n        { title: '\u5EF6\u65F6\u63D0\u9192', type: reminderAgentManager.ActionButtonType.ACTION_BUTTON_TYPE_SNOOZE }\n      ],\n      snoozeTimes: 1,\n      timeInterval: 10 * 60\n"})}),"\n",(0,i.jsx)(e.p,{children:"2\uFF09\u62BD\u53D6\u521B\u5EFA\u540E\u53F0\u4EE3\u7406\u5DE5\u5177\u7C7B"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",meta:'title="utils/alarmManager.ets"',children:"\nimport reminderAgentManager from '@ohos.reminderAgentManager'\nexport class AlarmManager {\n\n  // \u6DFB\u52A0\u4EE3\u7406\u63D0\u9192\n  static async addReminder (hour: number, minute: number) {\n    // 1. \u6DFB\u52A0\u540E\u53F0\u4EE3\u7406\u63D0\u9192-\u95F9\u949F\n    const reminderRequest: reminderAgentManager.ReminderRequestAlarm = {\n      reminderType: reminderAgentManager.ReminderType.REMINDER_TYPE_ALARM,\n      hour,\n      minute,\n      ringDuration: 60,\n      title: '\u95F9\u94C3',\n      // \u8DF3\u8F6C\n      wantAgent: {\n        pkgName: 'com.itcast.hmday05',\n        abilityName: 'EntryAbility'\n      },\n      // \u5EF6\u65F6\u548C\u5173\u95ED\n      actionButton: [\n        { title: '\u5173\u95ED', type: reminderAgentManager.ActionButtonType.ACTION_BUTTON_TYPE_CLOSE },\n        { title: '\u5EF6\u65F6\u63D0\u9192', type: reminderAgentManager.ActionButtonType.ACTION_BUTTON_TYPE_SNOOZE }\n      ],\n      snoozeTimes: 2,\n      timeInterval: 10 * 60\n    }\n\n    const reminderId = await reminderAgentManager.publishReminder(reminderRequest)\n    return reminderId\n  }\n}\n\n"})}),"\n",(0,i.jsx)(e.p,{children:"3\uFF09\u8FDB\u884C\u590D\u7528"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-diff",meta:'title="pages/DetailPage.ets"',children:"      // 1. \u5F00\u542F\u63D0\u9192\n      const hour = this.state.now.getHours()\n      const minute = this.state.now.getMinutes()\n+      const reminderId = await AlarmManager.addReminder(hour, minute)\n      // 2. \u8BB0\u5F55\u6570\u636E\n"})}),"\n",(0,i.jsxs)(e.h3,{id:"11-\u4E1A\u52A1\u903B\u8F91-\u505C\u6B62\u548C\u5F00\u542F\u95F9\u949F\u4EFB\u52A1",children:["11. \u4E1A\u52A1\u903B\u8F91-\u505C\u6B62\u548C\u5F00\u542F\u95F9\u949F\u4EFB\u52A1",(0,i.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#11-\u4E1A\u52A1\u903B\u8F91-\u505C\u6B62\u548C\u5F00\u542F\u95F9\u949F\u4EFB\u52A1",children:"#"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",meta:'title="ClockItemComp.ets"',children:"  clockStore = new ClockStore()\n\n  async toggle(isOn: boolean) {\n    reminderAgentManager.cancelReminder(this.item.reminderId)\n\n    this.item.enabled = isOn\n    if (this.item.enabled) {\n      const reminderId = await AlarmManager.createAlarmTask(this.item.hour, this.item.minute)\n      this.item.reminderId = reminderId\n    }\n    this.clockStore.addClock(this.item)\n    promptAction.showToast({ message: isOn ? '\u5DF2\u5F00\u542F' : '\u5DF2\u5173\u95ED' })\n  }\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",meta:'title="ClockItemComp.ets"',children:"      // \u5F00\u5173\n      Toggle({ type: ToggleType.Switch, isOn: this.item.enabled })\n        .onChange(isOn => this.toggle(isOn))\n"})})]})}function o(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.useMDXComponents)(),n.components);return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}var l=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["guide%2Fnaozhong.mdx"]={toc:[{text:"\u9636\u6BB5\u6848\u4F8B-\u534E\u4E3A\u95F9\u949F",id:"\u9636\u6BB5\u6848\u4F8B-\u534E\u4E3A\u95F9\u949F",depth:2},{text:"1. \u9875\u9762\u7ED3\u6784-\u9996\u9875\u7ED3\u6784",id:"1-\u9875\u9762\u7ED3\u6784-\u9996\u9875\u7ED3\u6784",depth:3},{text:"2. \u9875\u9762\u7ED3\u6784-\u7ED8\u5236\u95F9\u949F",id:"2-\u9875\u9762\u7ED3\u6784-\u7ED8\u5236\u95F9\u949F",depth:3},{text:"3. \u9875\u9762\u7ED3\u6784-\u7ED8\u5236\u95F9\u949F\u4EFB\u52A1\u5217\u8868",id:"3-\u9875\u9762\u7ED3\u6784-\u7ED8\u5236\u95F9\u949F\u4EFB\u52A1\u5217\u8868",depth:3},{text:"4. \u9875\u9762\u7ED3\u6784-\u8BE6\u60C5\u9875",id:"4-\u9875\u9762\u7ED3\u6784-\u8BE6\u60C5\u9875",depth:3},{text:"5. \u4E1A\u52A1\u903B\u8F91-\u9996\u9009\u9879\u5B58\u50A8\u5DE5\u5177",id:"5-\u4E1A\u52A1\u903B\u8F91-\u9996\u9009\u9879\u5B58\u50A8\u5DE5\u5177",depth:3},{text:"6. \u4E1A\u52A1\u903B\u8F91-\u6DFB\u52A0\u95F9\u949F\u4EFB\u52A1",id:"6-\u4E1A\u52A1\u903B\u8F91-\u6DFB\u52A0\u95F9\u949F\u4EFB\u52A1",depth:3},{text:"7. \u4E1A\u52A1\u903B\u8F91-\u6E32\u67D3\u95F9\u949F\u4EFB\u52A1\u5217\u8868",id:"7-\u4E1A\u52A1\u903B\u8F91-\u6E32\u67D3\u95F9\u949F\u4EFB\u52A1\u5217\u8868",depth:3},{text:"8. \u4E1A\u52A1\u903B\u8F91-\u4FEE\u6539\u95F9\u94C3\u4EFB\u52A1",id:"8-\u4E1A\u52A1\u903B\u8F91-\u4FEE\u6539\u95F9\u94C3\u4EFB\u52A1",depth:3},{text:"9. \u4E1A\u52A1\u903B\u8F91-\u5220\u9664\u95F9\u949F\u4EFB\u52A1",id:"9-\u4E1A\u52A1\u903B\u8F91-\u5220\u9664\u95F9\u949F\u4EFB\u52A1",depth:3},{text:"10. \u4E1A\u52A1\u903B\u8F91-\u901A\u77E5\u5524\u8D77\u5E94\u7528\u548C\u5173\u95ED\u5EF6\u65F6",id:"10-\u4E1A\u52A1\u903B\u8F91-\u901A\u77E5\u5524\u8D77\u5E94\u7528\u548C\u5173\u95ED\u5EF6\u65F6",depth:3},{text:"11. \u4E1A\u52A1\u903B\u8F91-\u505C\u6B62\u548C\u5F00\u542F\u95F9\u949F\u4EFB\u52A1",id:"11-\u4E1A\u52A1\u903B\u8F91-\u505C\u6B62\u548C\u5F00\u542F\u95F9\u949F\u4EFB\u52A1",depth:3}],title:"\u9E3F\u8499-6. \u534E\u4E3A\u95F9\u949F",frontmatter:{title:"HM - \u9E3F\u8499-\u534E\u4E3A\u95F9\u949F"}}}}]);