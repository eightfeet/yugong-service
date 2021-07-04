export default {
  pageData: {
    pageTitle: '天天抽奖',
    style: {},
    unit: 'px',
    toUnit: 'px',
    onLoadApi: [
      {
        name: '获取活动信息',
        apiId: '27d0ece9-39e4-4b2b-afb8-e7fd6947d6ea',
        url: 'https://wx-test1.by-health.com/scrmv2/marketing/queryLotteryInfo',
        body: [
          {
            type: 'number',
            data: '1',
            fieldName: 'activityId',
            name: 'activityId',
          },
        ],
        method: 'POST',
        successPublic: [
          {
            type: 'string',
            data: '{{prizes}}',
            fieldName: 'prizes',
            name: 'prizes',
          },
          {
            name: 'rules',
            fieldName: 'rules',
            type: 'string',
            data: '{{response.data.comments}}',
          },
          {
            name: 'activity',
            fieldName: 'activity',
            type: 'string',
            data: '{{activity}}',
          },
        ],
        dataMap: [
          {
            map: {
              type: 'object',
              describe: '',
              fieldName: 'mapsArg',
              name: '映射关系',
              data: {
                prizeAlias: 'prizeName',
                memo: 'prizeName',
                prizeId: 'prizeId',
                prizeType: 'prizeType',
                receiveType: 'receiveType',
                prizeName: 'prizeName',
                awardMsg: 'awardMsg',
                gameImg: 'gameImg',
                prizeImg: 'prizeImg',
              },
            },
            source: 'response.data.prizeinfos',
            target: 'prizes',
          },
          {
            source: 'response.data',
            target: 'activity',
            map: {
              type: 'object',
              describe: '',
              fieldName: 'mapsArg',
              name: '映射关系',
              data: {
                activityId: 'activityId',
                activityName: 'activityName',
              },
            },
          },
        ],
      },
      {
        name: '获取用户信息',
        apiId: '7710769c-b09d-4ba2-82e4-f70e88a0ec3e',
        url: 'https://wx-test1.by-health.com/scrm/employee/findEmployeeByJwt',
        method: 'GET',
        headers: {
          Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2MjUxMDI0MzcsImV4cCI6MTYyNTcwNzIzNywiaXNzIjoiRW1wbG95ZWUiLCJzdWIiOiI1MTMyOTY0NiJ9.mIwDvqBV36NANh1k5rwibZDM5j6tizjGshNRHfBLdmLn5fQAf07sz_9PwFzoORVojEGDd_wT2XBiMIpzwCe32w',
        },
        dataMap: [
          {
            source: 'response',
            target: 'userInfo',
            map: {
              type: 'object',
              describe: '',
              fieldName: 'mapsArg',
              name: '映射关系',
              data: {
                memberId: 'memberId',
              },
            },
          },
        ],
        successPublic: [
          {
            type: 'string',
            data: '{{userInfo}}',
            fieldName: 'userInfo',
            name: 'userInfo',
          },
        ],
      },
      {
        name: '检查用户是否可以抽奖',
        apiId: 'e7e6a3f1-dd55-4cb6-b218-a2d733f4533d',
        url: 'https://wx-test1.by-health.com/scrm/marketing/canParticipateLottery',
        method: 'POST',
        body: [
          {
            type: 'number',
            data: '1',
            fieldName: 'activityId',
            name: 'activityId',
          },
          {
            name: 'lotteryMemberId',
            fieldName: 'lotteryMemberId',
            type: 'number',
            data: '{{userInfo.memberId}}',
          },
          {
            name: 'orgId',
            fieldName: 'orgId',
            type: 'string',
            data: '1-29O97N7',
          },
        ],
      },
      {
        name: '获取最新获奖信息',
        apiId: 'b3a68328-53b6-48e5-82cb-4e3ae1dd1b08',
        url: 'https://wx-test1.by-health.com/scrm/marketing/getNewestPrizerecord',
        method: 'POST',
        body: [
          {
            type: 'number',
            data: '1',
            fieldName: 'activityId',
            name: 'activityId',
          },
        ],
        dataMap: [
          {
            source: 'response',
            target: 'messages',
            map: {
              type: 'object',
              describe: '',
              fieldName: 'mapsArg',
              name: '映射关系',
              data: {
                message: '{{memberName}}抽中{{prizeName}}',
              },
            },
          },
        ],
        successPublic: [
          {
            type: 'string',
            data: '{{messages}}',
            fieldName: 'messages',
            name: 'messages',
          },
        ],
      },
    ],
    mountEnvents: [],
    unmountEnvents: [],
    cols: 12,
    rowHeight: 20,
    space: 0,
    windowWidth: 414,
    windowHeight: 736,
  },
  appData: [
    {
      moduleName: '未命名',
      moduleId: '25652aea-53c6-492f-98bc-91dc171b0c4d',
      layout: {
        w: 10,
        h: 10,
        x: 1,
        y: 8,
        i: '25652aea-53c6-492f-98bc-91dc171b0c4d',
        moved: false,
        static: false,
      },
      style: {
        basic: {},
        wrap: {
          backgroundGroup: {},
          display: {
            width: [
              260,
              '',
            ],
            height: [
              260,
              '',
            ],
          },
        },
        light: {},
        wheel: {
          backgroundGroup: {
            backgroundColor: 'rgba(209, 209, 209, 1)',
          },
          border: {
            radiusTopLeft: [
              100,
              '%',
            ],
            radiusTopRight: [
              100,
              '%',
            ],
            radiusBottomLeft: [
              100,
              '%',
            ],
            radiusBottomRight: [
              100,
              '%',
            ],
          },
        },
        divide: {
          backgroundGroup: {
            backgroundColor: 'rgba(237, 237, 239, 1)',
          },
        },
        prizealias: {
          font: {
            fontStyle: 'italic',
          },
        },
        lotterybutton: {
          font: {},
          backgroundGroup: {
            backgroundColor: 'rgba(170, 170, 170, 1)',
          },
          border: {
            radiusTopLeft: [
              100,
              '%',
            ],
            radiusTopRight: [
              100,
              '%',
            ],
            radiusBottomLeft: [
              100,
              '%',
            ],
            radiusBottomRight: [
              100,
              '%',
            ],
          },
        },
        needle: {
          backgroundGroup: {
            backgroundColor: 'rgba(231, 231, 231, 0.26)',
          },
          display: {
            width: [
              40,
              '%',
            ],
            height: [
              40,
              '%',
            ],
            margin: [
              [
                -20,
                '%',
              ],
              [
                null,
                '',
              ],
              [
                null,
                '',
              ],
              [
                -20,
                '%',
              ],
            ],
            position: 'absolute',
            left: [
              50,
              '%',
            ],
            top: [
              50,
              '%',
            ],
          },
          border: {
            radiusTopLeft: [
              100,
              '%',
            ],
            radiusTopRight: [
              100,
              '%',
            ],
            radiusBottomLeft: [
              100,
              '%',
            ],
            radiusBottomRight: [
              100,
              '%',
            ],
          },
        },
        gameImg: {
          display: {
            width: [
              20,
              '%',
            ],
            position: 'relative',
          },
        },
        successoverlay: {},
        successcontainer: {},
        successclose: {
          display: {
            width: [
              40,
              '',
            ],
            height: [
              40,
              '',
            ],
          },
          backgroundGroup: {
            backgroundList: [
              {
                imageUrl: '/static/media/cancel.1534db4e.svg',
                sizeY: [
                  70,
                  '%',
                ],
                sizeX: [
                  70,
                  '%',
                ],
                positionX: [
                  50,
                  '%',
                ],
                positionY: [
                  50,
                  '%',
                ],
                repeat: 'no-repeat',
              },
            ],
          },
        },
        successcontent: {
          display: {
            width: [
              280,
              '',
            ],
            padding: [
              [
                null,
                '',
              ],
              [
                null,
                '',
              ],
              [
                20,
                '',
              ],
              [
                null,
                '',
              ],
            ],
          },
          border: {
            radiusTopLeft: [
              10,
              '',
            ],
            radiusTopRight: [
              10,
              '',
            ],
            radiusBottomLeft: [
              10,
              '',
            ],
            radiusBottomRight: [
              10,
              '',
            ],
          },
        },
        successheader: {
          border: {
            radiusTopLeft: [
              10,
              '',
            ],
            radiusTopRight: [
              10,
              '',
            ],
          },
          display: {
            height: [
              40,
              '',
            ],
          },
          font: {
            fontWeight: 'bold',
            lineHeight: [
              40,
              '',
            ],
            align: 'center',
            color: 'rgba(255, 255, 255, 1)',
          },
          backgroundGroup: {
            backgroundList: [
              {
                gradient: [
                  {
                    color: 'rgba(63, 81, 181, 0.53)',
                    transition: 51,
                  },
                  {
                    color: 'rgba(174, 93, 206, 0.73)',
                    transition: 54,
                  },
                ],
                gradientDirections: '45deg',
                repeat: 'repeat',
                sizeX: [
                  4,
                  '',
                ],
                sizeY: [
                  4,
                  '',
                ],
              },
              {
                gradient: [
                  {
                    color: 'rgba(139, 104, 206, 1)',
                    transition: 1,
                  },
                  {
                    color: 'rgba(174, 93, 206, 1)',
                    transition: 81,
                  },
                ],
                gradientDirections: 'top',
              },
            ],
          },
          boxShadow: [],
          textShadow: [
            {
              color: 'rgba(74, 25, 161, 1 )',
              shiftRight: [
                null,
                '',
              ],
              shiftDown: [
                3,
                '',
              ],
            },
          ],
        },
        successarticle: {},
        successmodalprizename: {
          font: {
            fontSize: [
              26,
              '',
            ],
            align: 'center',
            color: 'rgba(244, 67, 54, 1)',
            fontWeight: 'bold',
            lineHeight: [
              45,
              '',
            ],
          },
          display: {
            margin: [
              [
                20,
                '',
              ],
              [
                null,
                '',
              ],
              [
                null,
                '',
              ],
              [
                null,
                '',
              ],
            ],
          },
        },
        successmodalawardmsg: {
          font: {
            fontSize: [
              20,
              '',
            ],
            align: 'center',
          },
        },
        successmodalprizeimg: {
          display: {
            width: [
              100,
              '',
            ],
            height: [
              100,
              '',
            ],
          },
        },
        successmodalmemo: {
          display: {
            margin: [
              [
                null,
                '',
              ],
              [
                10,
                '',
              ],
              [
                10,
                '',
              ],
              [
                10,
                '',
              ],
            ],
          },
          font: {
            fontSize: [
              13,
              '',
            ],
            align: 'center',
          },
        },
        successok: {
          display: {
            padding: [
              [
                10,
                '',
              ],
              [
                30,
                '',
              ],
              [
                10,
                '',
              ],
              [
                30,
                '',
              ],
            ],
          },
          border: {
            borderColor: 'rgba(205, 205, 205, 1)',
            borderPosition: {
              border: true,
            },
            borderWidth: [
              1,
              '',
            ],
            borderStyle: 'solid',
            radiusTopLeft: [
              6,
              '',
            ],
            radiusTopRight: [
              6,
              '',
            ],
            radiusBottomLeft: [
              6,
              '',
            ],
            radiusBottomRight: [
              6,
              '',
            ],
          },
          backgroundCommon: {
            backgroundColor: 'rgba(226, 226, 226, 1)',
          },
          boxShadow: [
            {
              shiftDown: [
                2,
                '',
              ],
              color: 'rgba(0, 0, 0, 0.15 )',
              blur: [
                4,
                '',
              ],
            },
          ],
        },
        successmodify: {},
        failedoverlay: {},
        failedcontainer: {},
        failedclose: {
          display: {
            width: [
              40,
              '',
            ],
            height: [
              40,
              '',
            ],
          },
          backgroundGroup: {
            backgroundList: [
              {
                imageUrl: '/static/media/cancel.1534db4e.svg',
                sizeY: [
                  70,
                  '%',
                ],
                sizeX: [
                  70,
                  '%',
                ],
                positionX: [
                  50,
                  '%',
                ],
                positionY: [
                  50,
                  '%',
                ],
                repeat: 'no-repeat',
              },
            ],
          },
        },
        failedcontent: {
          display: {
            width: [
              280,
              '',
            ],
            padding: [
              [
                null,
                '',
              ],
              [
                null,
                '',
              ],
              [
                20,
                '',
              ],
              [
                null,
                '',
              ],
            ],
          },
          border: {
            radiusTopLeft: [
              10,
              '',
            ],
            radiusTopRight: [
              10,
              '',
            ],
            radiusBottomLeft: [
              10,
              '',
            ],
            radiusBottomRight: [
              10,
              '',
            ],
          },
        },
        failedheader: {
          border: {
            radiusTopLeft: [
              10,
              '',
            ],
            radiusTopRight: [
              10,
              '',
            ],
          },
          display: {
            height: [
              40,
              '',
            ],
          },
          font: {
            fontWeight: 'bold',
            lineHeight: [
              40,
              '',
            ],
            align: 'center',
            color: 'rgba(255, 255, 255, 1)',
          },
          backgroundGroup: {
            backgroundList: [
              {
                gradient: [
                  {
                    color: 'rgba(33, 150, 243, 1)',
                    transition: 1,
                  },
                  {
                    color: 'rgba(3, 169, 244, 1)',
                    transition: 81,
                  },
                ],
                gradientDirections: 'top',
              },
            ],
          },
        },
        failedarticle: {},
        failedmodalprizename: {
          font: {
            fontSize: [
              26,
              '',
            ],
            align: 'center',
            color: 'rgba(33, 150, 243, 1)',
            fontWeight: 'bold',
            lineHeight: [
              45,
              '',
            ],
          },
          display: {
            margin: [
              [
                20,
                '',
              ],
              [
                null,
                '',
              ],
              [
                null,
                '',
              ],
              [
                null,
                '',
              ],
            ],
          },
        },
        failedmodalawardmsg: {
          font: {
            fontSize: [
              20,
              '',
            ],
            align: 'center',
          },
        },
        failedmodalprizeimg: {
          display: {
            width: [
              100,
              '',
            ],
            height: [
              100,
              '',
            ],
          },
        },
        failedmodalmemo: {
          display: {
            margin: [
              [
                null,
                '',
              ],
              [
                10,
                '',
              ],
              [
                10,
                '',
              ],
              [
                10,
                '',
              ],
            ],
          },
          font: {
            fontSize: [
              13,
              '',
            ],
            align: 'center',
          },
        },
        failedok: {
          display: {
            padding: [
              [
                10,
                '',
              ],
              [
                30,
                '',
              ],
              [
                10,
                '',
              ],
              [
                30,
                '',
              ],
            ],
          },
          border: {
            borderColor: 'rgba(205, 205, 205, 1)',
            borderPosition: {
              border: true,
            },
            borderWidth: [
              1,
              '',
            ],
            borderStyle: 'solid',
            radiusTopLeft: [
              6,
              '',
            ],
            radiusTopRight: [
              6,
              '',
            ],
            radiusBottomLeft: [
              6,
              '',
            ],
            radiusBottomRight: [
              6,
              '',
            ],
          },
          backgroundCommon: {
            backgroundColor: 'rgba(226, 226, 226, 1)',
          },
          boxShadow: [
            {
              shiftDown: [
                2,
                '',
              ],
              color: 'rgba(0, 0, 0, 0.15 )',
              blur: [
                4,
                '',
              ],
            },
          ],
        },
        failedmodify: {},
        addressmodalcontainer: {},
        addressmodaloverlay: {},
        addressmodalcontent: {
          display: {
            width: [
              280,
              '',
            ],
            padding: [
              [
                0,
                '',
              ],
              [
                0,
                '',
              ],
              [
                0,
                '',
              ],
              [
                0,
                '',
              ],
            ],
          },
          border: {
            radiusTopLeft: [
              10,
              '',
            ],
            radiusTopRight: [
              10,
              '',
            ],
            radiusBottomLeft: [
              10,
              '',
            ],
            radiusBottomRight: [
              10,
              '',
            ],
          },
        },
        addressmodalformbox: {
          display: {
            width: [
              100,
              '%',
            ],
          },
        },
        addressmodalheader: {
          border: {
            radiusTopLeft: [
              10,
              '',
            ],
            radiusTopRight: [
              10,
              '',
            ],
            borderStyle: 'none',
            borderWidth: [
              0,
              '',
            ],
            borderPosition: {
              borderTop: false,
              borderRight: false,
              borderBottom: true,
              borderLeft: false,
              border: false,
            },
            borderColor: 'rgba(255, 255, 255, 1)',
          },
          display: {
            height: [
              40,
              '',
            ],
            padding: [
              [
                '0',
                '-',
              ],
              [
                '0',
                '-',
              ],
              [
                '0',
                '-',
              ],
              [
                '0',
                '-',
              ],
            ],
            margin: [
              [
                '0',
                '-',
              ],
              [
                '0',
                '-',
              ],
              [
                '0',
                '-',
              ],
              [
                '0',
                '-',
              ],
            ],
          },
          font: {
            fontWeight: 'bold',
            lineHeight: [
              40,
              '',
            ],
            align: 'center',
            color: 'rgba(255, 255, 255, 1)',
          },
          backgroundGroup: {
            backgroundList: [
              {
                gradient: [
                  {
                    color: 'rgba(63, 81, 181, 0.53)',
                    transition: 51,
                  },
                  {
                    color: 'rgba(174, 93, 206, 0.73)',
                    transition: 54,
                  },
                ],
                gradientDirections: '45deg',
                repeat: 'repeat',
                sizeX: [
                  4,
                  '',
                ],
                sizeY: [
                  4,
                  '',
                ],
              },
              {
                gradient: [
                  {
                    color: 'rgba(139, 104, 206, 1)',
                    transition: 1,
                  },
                  {
                    color: 'rgba(174, 93, 206, 1)',
                    transition: 81,
                  },
                ],
                gradientDirections: 'top',
              },
            ],
          },
          boxShadow: [],
          textShadow: [
            {
              color: 'rgba(74, 25, 161, 1 )',
              shiftRight: [
                null,
                '',
              ],
              shiftDown: [
                3,
                '',
              ],
            },
          ],
        },
        addressmodalarticle: {},
        addressmodalsubtitle: {},
        addressmodalrow: {
          display: {
            margin: [
              [
                null,
                '',
              ],
              [
                10,
                '',
              ],
              [
                10,
                '',
              ],
              [
                10,
                '',
              ],
            ],
          },
        },
        addressmodallabel: {},
        addressmodalinput: {
          font: {
            fontSize: [
              13,
              '',
            ],
            lineHeight: [
              30,
              '',
            ],
          },
        },
        addresscheckphone: {
          font: {
            fontSize: [
              13,
              '',
            ],
            lineHeight: [
              30,
              '',
            ],
          },
        },
        addresscheckphonedisable: {},
        addressmodalclose: {
          display: {
            width: [
              40,
              '',
            ],
            height: [
              40,
              '',
            ],
          },
          backgroundGroup: {
            backgroundList: [
              {
                imageUrl: '/static/media/cancel.1534db4e.svg',
                sizeY: [
                  70,
                  '%',
                ],
                sizeX: [
                  70,
                  '%',
                ],
                positionX: [
                  50,
                  '%',
                ],
                positionY: [
                  50,
                  '%',
                ],
                repeat: 'no-repeat',
              },
            ],
          },
        },
        addressmodalok: {
          display: {
            padding: [
              [
                10,
                '',
              ],
              [
                30,
                '',
              ],
              [
                10,
                '',
              ],
              [
                30,
                '',
              ],
            ],
            margin: [
              [
                '0px',
                '-',
              ],
              [
                'auto',
                '-',
              ],
              [
                '0px',
                '-',
              ],
              [
                'auto',
                '-',
              ],
            ],
            height: [
              'auto',
              '-',
            ],
          },
          font: {
            fontSize: [
              13,
              '',
            ],
          },
          border: {
            borderColor: 'rgba(205, 205, 205, 1)',
            borderPosition: {
              border: true,
            },
            borderWidth: [
              1,
              '',
            ],
            borderStyle: 'solid',
            radiusTopLeft: [
              6,
              '',
            ],
            radiusTopRight: [
              6,
              '',
            ],
            radiusBottomLeft: [
              6,
              '',
            ],
            radiusBottomRight: [
              6,
              '',
            ],
          },
          backgroundCommon: {
            backgroundColor: 'rgba(226, 226, 226, 1)',
          },
          boxShadow: [
            {
              shiftDown: [
                2,
                '',
              ],
              color: 'rgba(0, 0, 0, 0.15 )',
              blur: [
                4,
                '',
              ],
            },
          ],
        },
        addressmodify1: {},
      },
      type: 'Roulette',
      events: {
        mount: [
          {
            name: '25652aea-53c6-492f-98bc-91dc171b0c4d/setRunningPrizes',
            arguments: [
              {
                type: 'runningTime',
                describe: '从全局数据中设置奖品数据\n                                <br/>\n                                数据要求：<br />\n                                {<br /> \n                                    prizeId: [number]奖品id\n                                    <br />\n                                    prizeType: [number]奖品类型 0 未中奖, 1 实物, 2 虚拟\n                                    <br />\n                                    receiveType?: [number]领取方式 1：默认；2：填写地址；3：链接类；4：虚拟卡\n                                    <br />\n                                    prizeAlias?: [string]奖品别名\n                                    <br />\n                                    prizeName: [string]奖品名称\n                                    <br />\n                                    awardMsg?: [string]中奖提示信息\n                                    <br />\n                                    gameImg?: [string]游戏图片地址\n                                    <br />\n                                    prizeImg: [string]奖品图片地址\n                                    <br />\n                                    memo?: [string]奖品备注说明\n                                    <br />\n                                }[]',
                name: '奖品数据',
                fieldName: 'prizes',
                data: 'prizes',
              },
            ],
          },
          {
            name: '25652aea-53c6-492f-98bc-91dc171b0c4d/useConfig',
            arguments: [
              {
                type: 'string',
                name: '手机',
                fieldName: 'phone',
                describe: '选填用户手机号码',
                data: '',
              },
              {
                type: 'number',
                name: '填写身份证',
                fieldName: 'cardIdRequest',
                describe: ' 1 隐藏，2 验证，3 为空时不验证有填写时验证，4 不验证',
                data: '1',
              },
            ],
          },
          {
            name: '25652aea-53c6-492f-98bc-91dc171b0c4d/setDefaultReceiveInfo',
            arguments: [
              {
                type: 'string',
                name: '电话',
                fieldName: 'receiverPhone',
                describe: '收货人电话号码',
                data: '',
              },
              {
                type: 'string',
                name: '省市区名称',
                fieldName: 'regionName',
                describe: '输入省市区名用,隔开: xx省,xx市,xx区/县',
                data: '',
              },
              {
                type: 'string',
                name: '省市区id',
                fieldName: 'region',
                describe: '输入省市区id用,隔开: 15,1513,151315',
                data: '',
              },
              {
                type: 'string',
                name: '详细地址',
                fieldName: 'address',
                describe: '请输入详细地址',
                data: '',
              },
              {
                type: 'string',
                name: '身份证号',
                fieldName: 'idCard',
                describe: '获奖用户身份证号码',
                data: '',
              },
            ],
          },
          {
            name: '25652aea-53c6-492f-98bc-91dc171b0c4d/setSuccessModal',
            arguments: [
              {
                type: 'string',
                name: '标题',
                fieldName: 'title',
                describe: '中奖弹窗标题',
                data: '',
              },
              {
                type: 'string',
                name: '动画',
                fieldName: 'animation',
                describe: '中奖弹窗动画\n                    flipInY | flipInX | fadeInUp | fadeInDown | fadeInLeft \n                    | fadeInRight | zoomIn | zoomInUp | zoomInDown | zoomInLeft | zoomInRight',
                data: 'flipInY',
              },
            ],
          },
          {
            name: '6e5ff757-807f-4181-92db-6f8ad5a72351/setText',
            arguments: [
              {
                type: 'array',
                name: '文本内容',
                describe: '可设置多行文本内容',
                html: true,
                data: [
                  '今天还有<b style="color:red">{{chances}}</b>次抽奖机会',
                ],
                fieldName: 'textArray',
              },
              {
                type: 'boolean',
                name: '自动序号',
                describe: '自动生成1开始的序号',
                data: {
                  comparableAverageA: 'a',
                  comparableAverageB: 'b',
                  method: '===',
                },
                fieldName: 'autoNumber',
              },
            ],
          },
        ],
        unmount: [],
        onEnd: [
          {
            name: 'global/globalMessage',
            arguments: [
              {
                type: 'boolean',
                name: '条件',
                fieldName: 'condition',
                describe: '前置条件，条件成立时才显示信息',
                data: {
                  comparableAverageA: '{{lotteryResult}}',
                  comparableAverageB: '2',
                  method: '>=',
                },
              },
              {
                type: 'number',
                name: '类型',
                fieldName: 'messageType',
                describe: '信息类型，1:消息，2:成功，3:警告，4:错误',
                data: '4',
              },
              {
                type: 'string',
                name: '消息',
                fieldName: 'messageStr',
                describe: '弹窗信息',
                data: '{{lotteryResultMsg}}',
              },
            ],
          },
          {
            name: '6e5ff757-807f-4181-92db-6f8ad5a72351/setText',
            arguments: [
              {
                type: 'array',
                name: '文本内容',
                describe: '可设置多行文本内容',
                html: true,
                data: [
                  '今天还有<b style="color:red">{{chances}}</b>次抽奖机会',
                ],
                fieldName: 'textArray',
              },
              {
                type: 'boolean',
                name: '自动序号',
                describe: '自动生成1开始的序号',
                data: {
                  comparableAverageA: 'a',
                  comparableAverageB: 'b',
                  method: '===',
                },
                fieldName: 'autoNumber',
              },
            ],
          },
        ],
      },
      api: [
        {
          apiId: 'init',
          name: '获取初始数据',
          url: 'https://wx-test1.by-health.com/scrm/marketing/countLotteryChance',
          body: [
            {
              type: 'number',
              data: '1',
              fieldName: 'activityId',
              name: 'activityId',
            },
            {
              name: 'chancefromcomment',
              fieldName: 'chancefromcomment',
              type: 'string',
              data: 'task_lottery',
            },
            {
              name: 'memberId',
              fieldName: 'memberId',
              type: 'number',
              data: '{{userInfo.memberId}}',
            },
          ],
          method: 'POST',
          successPublic: [
            {
              type: 'string',
              data: '{{response.chancetimes}}',
              fieldName: 'chances',
              name: 'chances',
            },
          ],
        },
        {
          apiId: 'beforeStart',
          name: '抽奖前置验证(将在每次抽奖前调用)',
          description: '',
          url: '',
        },
        {
          apiId: 'lottery',
          name: '抽奖',
          description: '通过数据映射/转换数据\n            <br/>\n            数据要求：<br />\n            {\n             data: ...<br />\n             prize: {<br /> \n                  prizeId: [number]奖品id\n                <br />\n                  prizeType: [number]奖品类型 0 未中奖, 1 实物, 2 虚拟\n                <br />\n                  receiveType?: [number]领取方式 1：默认；2：填写地址；3：链接类；4：虚拟卡\n                <br />\n                  prizeAlias?: [string]奖品别名\n                <br />\n                  prizeName: [string]奖品名称\n                <br />\n                  awardMsg?: [string]中奖提示信息\n                <br />\n                  gameImg?: [string]游戏图片地址\n                <br />\n                  prizeImg: [string]奖品图片地址\n                <br />\n                  memo?: [string]奖品备注说明\n                <br />\n                 }<br />}',
          url: 'https://wx-test1.by-health.com/scrm/marketing/employeeLottery',
          body: [
            {
              type: 'number',
              data: '1',
              fieldName: 'activityId',
              name: 'activityId',
            },
            {
              name: 'channelType',
              fieldName: 'channelType',
              type: 'number',
              data: '1',
            },
            {
              name: 'lotteryMemberId',
              fieldName: 'lotteryMemberId',
              type: 'number',
              data: '{{userInfo.memberId}}',
            },
            {
              name: 'lotteryType',
              fieldName: 'lotteryType',
              type: 'string',
              data: 'task_lottery',
            },
            {
              name: 'prizeGroupId',
              fieldName: 'prizeGroupId',
              type: 'number',
              data: '1',
            },
            {
              name: 'storeId',
              fieldName: 'storeId',
              type: 'string',
              data: '1-29O97N7',
            },
          ],
          method: 'POST',
          successPublic: [
            {
              type: 'string',
              data: '{{response.lotteryResultMsg}}',
              fieldName: 'lotteryResultMsg',
              name: 'lotteryResultMsg',
            },
            {
              name: 'lotteryResult',
              fieldName: 'lotteryResult',
              type: 'string',
              data: '{{response.result}}',
            },
            {
              name: 'chances',
              fieldName: 'chances',
              type: 'string',
              data: 'js{{this.response.chance !== undefined ? this.response.chance : runningTimes.chances}}',
            },
          ],
          dataMap: [
            {
              source: 'response',
              target: 'lotterySuccessResult',
              map: {
                type: 'object',
                describe: '',
                fieldName: 'mapsArg',
                name: '映射关系',
                data: {
                  prizeId: 'prizeId',
                  prizeType: 'js{{this.prizeType === "TBPOINTS" ? 2: 1}}',
                },
              },
            },
          ],
        },
        {
          apiId: 'saveAddress',
          name: '保存收货地址',
          enterDescription: '原数据<br />{<br/>\n                address?: string 详细地址<br/>\n                idcode?: string 生份证号<br/>\n                phone?: string 电话号码<br/>\n                receiver?: string 收货人姓名<br/>\n                regions?: string 省市区id<br/>\n                regionsName?: string 省市区<br/>\n                verificationvode?: string 验证码<br/>\n            }',
          hideBodyInput: true,
        },
        {
          apiId: 'getVerificationCode',
          name: '获取验证码',
          enterDescription: '获取验证码',
        },
      ],
    },
    {
      moduleName: 'chances',
      moduleId: '6e5ff757-807f-4181-92db-6f8ad5a72351',
      layout: {
        w: 8,
        h: 2,
        x: 2,
        y: 2,
        i: '6e5ff757-807f-4181-92db-6f8ad5a72351',
        moved: false,
        static: false,
      },
      style: {
        basic: {
          font: {
            align: 'center',
          },
        },
        wrap: {},
        paragraph: {},
        prefix: {},
        even: {},
        odd: {},
        first: {},
        last: {},
      },
      type: 'Text',
      events: {
        mount: [
          {
            name: '/',
            arguments: [],
          },
        ],
      },
    },
    {
      moduleName: 'message',
      moduleId: 'dd386a59-f8c9-4dae-b0ed-d5e4c61189cb',
      layout: {
        w: 8,
        h: 1,
        x: 2,
        y: 24,
        i: 'dd386a59-f8c9-4dae-b0ed-d5e4c61189cb',
        moved: false,
        static: false,
      },
      style: {
        basic: {},
        item: {
          font: {
            align: 'center',
          },
        },
      },
      type: 'Broadcast',
      events: {
        mount: [
          {
            name: 'dd386a59-f8c9-4dae-b0ed-d5e4c61189cb/setMessages',
            arguments: [
              {
                type: 'runningTime',
                fieldName: 'messages',
                name: '数据',
                describe: '播报数据,数据结构 string[] 或者 { message: string, ... }[]',
                data: 'messages',
              },
              {
                type: 'number',
                fieldName: 'counter',
                name: '显示条数',
                describe: '循环显示条数',
                data: '3',
              },
              {
                type: 'number',
                fieldName: 'interval',
                name: '时间间隔',
                describe: '时间间隔',
                data: '2500',
              },
            ],
          },
        ],
      },
    },
    {
      moduleName: '未命名',
      moduleId: 'a520f540-9cec-4c1e-82de-722e6007ea72',
      layout: {
        w: 4,
        h: 2,
        x: 4,
        y: 28,
        i: 'a520f540-9cec-4c1e-82de-722e6007ea72',
        moved: false,
        static: false,
      },
      style: {
        basic: {},
        normal: {
          display: {
            padding: [
              [
                10,
                '',
              ],
              [
                10,
                '',
              ],
              [
                10,
                '',
              ],
              [
                10,
                '',
              ],
            ],
          },
          border: {
            borderColor: 'rgba(205, 205, 205, 1)',
            borderPosition: {
              border: true,
            },
            borderWidth: [
              1,
              '',
            ],
            borderStyle: 'solid',
            radiusTopLeft: [
              6,
              '',
            ],
            radiusTopRight: [
              6,
              '',
            ],
            radiusBottomLeft: [
              6,
              '',
            ],
            radiusBottomRight: [
              6,
              '',
            ],
          },
          backgroundCommon: {
            backgroundColor: 'rgba(226, 226, 226, 1)',
          },
          boxShadow: [
            {
              shiftDown: [
                2,
                '',
              ],
              color: 'rgba(0, 0, 0, 0.15 )',
              blur: [
                4,
                '',
              ],
            },
          ],
        },
        before: {},
        after: {},
        active: {},
        activebefore: {},
        activeafter: {},
        disabled: {
          font: {
            color: 'rgba(144, 144, 144, 1)',
          },
        },
        focus: {},
        hover: {},
      },
      type: 'Button',
      events: {
        mount: [
          {
            name: 'a520f540-9cec-4c1e-82de-722e6007ea72/setButton',
            arguments: [
              {
                type: 'string',
                name: '按钮文字',
                fieldName: 'buttonText',
                html: true,
                describe: '按钮显示文字',
                data: '活动规则',
              },
              {
                type: 'boolean',
                name: '禁用按钮',
                fieldName: 'disabled',
                describe: '禁用按钮，true禁用，false启用',
                data: {
                  comparableAverageA: 'a',
                  method: '===',
                },
              },
              {
                type: 'boolean',
                name: '隐藏按钮',
                fieldName: 'hidden',
                describe: '隐藏按钮，true隐藏，false不隐藏',
                data: {
                  comparableAverageA: 'a',
                  method: '===',
                },
              },
            ],
          },
          {
            name: 'a520f540-9cec-4c1e-82de-722e6007ea72/setButtonDisplay',
            arguments: [
              {
                type: 'string',
                name: '初始显示状态',
                fieldName: 'setButtonDisplay',
                describe: '按钮显状态，disabled(禁用), focus: (获取焦点), active: (激活), hover: (经过)',
                data: '',
              },
            ],
          },
        ],
        click: [
          {
            name: 'd948c1c8-43b6-43a0-8dcd-ae597cde02b5/createModal',
            arguments: [
              {
                type: 'object',
                name: '数据',
                describe: '对话框数据',
                html: 'innerhtml',
                data: {
                  header: '<h3>header</h3>',
                  article: '{{rules}}',
                },
                fieldName: 'modaldata',
              },
            ],
          },
        ],
      },
    },
    {
      moduleName: '规则弹窗',
      moduleId: 'd948c1c8-43b6-43a0-8dcd-ae597cde02b5',
      layout: {
        i: 'd948c1c8-43b6-43a0-8dcd-ae597cde02b5',
        w: 0,
        h: 0,
        x: 0,
        y: 0,
        moved: false,
        static: false,
      },
      style: {
        basic: {},
        overlay: {},
        container: {
          display: {
            width: [
              80,
              '%',
            ],
          },
        },
        content: {},
        header: {},
        article: {},
        close: {
          display: {
            width: [
              10,
              '',
            ],
            height: [
              10,
              '',
            ],
          },
        },
        ok: {},
        okdisabled: {},
        cancel: {},
        canceldisabled: {},
        modify1: {},
        modify2: {},
        modify3: {},
        modify4: {},
      },
      type: 'Modal',
      events: {
        mount: [
          {
            name: 'd948c1c8-43b6-43a0-8dcd-ae597cde02b5/setButton',
            arguments: [
              {
                type: 'boolean',
                name: '显示确认按钮',
                describe: '条件成立显示确认按钮',
                data: {
                  comparableAverageA: '0',
                  comparableAverageB: '0',
                  method: '===',
                },
                fieldName: 'isOk',
              },
              {
                type: 'boolean',
                name: '禁用确认按钮',
                describe: '条件成立禁用确认按钮',
                data: {
                  comparableAverageA: '0',
                  comparableAverageB: '1',
                  method: '===',
                },
                fieldName: 'isOkDisabled',
              },
              {
                type: 'boolean',
                name: '显示取消按钮',
                describe: '条件成立显示取消按钮',
                data: {
                  comparableAverageA: '0',
                  comparableAverageB: '3',
                  method: '===',
                },
                fieldName: 'isCancel',
              },
              {
                type: 'boolean',
                name: '禁用取消按钮',
                describe: '条件成立禁用取消按钮',
                data: {
                  comparableAverageA: '0',
                  comparableAverageB: '1',
                  method: '===',
                },
                fieldName: 'isCancelDisabled',
              },
              {
                type: 'object',
                name: '按钮文字',
                describe: '设置按钮文字',
                data: {
                  okText: '确定',
                  cancelText: '取消',
                },
                fieldName: 'buttontext',
              },
            ],
          },
          {
            name: 'd948c1c8-43b6-43a0-8dcd-ae597cde02b5/setAnimation',
            arguments: [
              {
                type: 'string',
                name: '动画类型',
                describe: '动画类型包含 "fadeInLeft" | "fadeInRight" | "fadeInDown" | "fadeInUp" | "zoomInLeft" | "zoomInRight" | "zoomInDown" | "zoomInUp" | "zoomIn" | "flipInX" | "flipInY"',
                data: '',
                fieldName: 'animationType',
              },
              {
                type: 'string',
                name: '动画时间',
                describe: '转场动画时长(默认0.2s)',
                data: '',
                fieldName: 'animationDuration',
              },
            ],
          },
        ],
      },
    },
  ],
};
