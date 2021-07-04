export default {
  pageData: {
    pageTitle: '校园红人季',
    style: {
      backgroundGroup: {
        backgroundList: [
          {
            imageUrl: 'https://yyjzx.blob.core.chinacloudapi.cn/upload-test/images/0520104946948.png',
          },
        ],
        backgroundColor: 'rgba(218, 79, 66, 1)',
      },
    },
    unit: 'px',
    toUnit: 'rem',
    onLoadApi: [],
    mountEnvents: [],
    unmountEnvents: [],
    cols: '24',
    rowHeight: '{{unit.rem}}',
    space: 0,
    windowWidth: 375,
    windowHeight: 676,
    UIWidth: 650,
    baseFont: 27.083,
  },
  appData: [
    {
      moduleName: '线上报名时间',
      moduleId: '79caec92-5bac-4a58-b351-8182e15ae78f',
      layout: {
        w: 22,
        h: 4,
        x: 1,
        y: 28,
        i: '79caec92-5bac-4a58-b351-8182e15ae78f',
        moved: false,
        static: false,
      },
      style: {
        basic: {
          font: {
            align: 'left',
          },
          border: {
            radiusTopLeft: [
              10,
              null,
            ],
            radiusTopRight: [
              10,
              null,
            ],
            radiusBottomLeft: [
              10,
              null,
            ],
            radiusBottomRight: [
              10,
              null,
            ],
          },
        },
        wrap: {
          backgroundGroup: {
            backgroundColor: 'rgba(180, 0, 3, 0.6)',
          },
          font: {
            color: 'rgba(255, 255, 255, 1)',
            fontSize: [
              26,
              null,
            ],
          },
          display: {
            overflow: 'visible',
            padding: [
              [
                10,
                null,
              ],
              [
                15,
                null,
              ],
              [
                10,
                null,
              ],
              [
                15,
                null,
              ],
            ],
          },
          border: {
            radiusTopLeft: [
              10,
              null,
            ],
            radiusTopRight: [
              10,
              null,
            ],
            radiusBottomLeft: [
              10,
              null,
            ],
            radiusBottomRight: [
              10,
              null,
            ],
          },
        },
        paragraph: {},
        prefix: {},
        even: {},
        odd: {},
        first: {
          font: {
            fontSize: [
              30,
              null,
            ],
            fontWeight: 'bold',
          },
          textShadow: [
            {
              hiddenItem: false,
              color: 'rgba(0, 0, 0, 1 )',
              blur: [
                null,
                null,
              ],
              shiftRight: [
                2,
                null,
              ],
              shiftDown: [
                2,
                null,
              ],
            },
            {
              hiddenItem: false,
              shiftRight: [
                -2,
                null,
              ],
              shiftDown: [
                -2,
                null,
              ],
              blur: [
                null,
                null,
              ],
              color: 'rgba(0, 0, 0, 1 )',
            },
          ],
        },
        last: {
          font: {
            fontSize: [
              25,
              null,
            ],
            lineHeight: [
              42,
              null,
            ],
          },
        },
      },
      content: {
        text: 1,
      },
      type: 'Text',
      events: {
        mount: [
          {
            name: '79caec92-5bac-4a58-b351-8182e15ae78f/setText',
            arguments: [
              {
                type: 'array',
                name: '文本内容',
                describe: '可设置多行文本内容',
                html: true,
                data: [
                  '线上报名时间',
                  '即日起到10月10日 00:00',
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
    },
    {
      moduleName: '线上报名',
      moduleId: 'a4751c27-179a-40bb-a13a-c6fa2252b719',
      layout: {
        w: 22,
        h: 7,
        x: 1,
        y: 17,
        i: 'a4751c27-179a-40bb-a13a-c6fa2252b719',
        moved: false,
        static: false,
      },
      style: {
        basic: {
          font: {
            align: 'left',
            fontSize: [
              null,
              null,
            ],
          },
          border: {
            radiusTopLeft: [
              10,
              null,
            ],
            radiusTopRight: [
              10,
              null,
            ],
            radiusBottomLeft: [
              10,
              null,
            ],
            radiusBottomRight: [
              10,
              null,
            ],
          },
          display: {
            width: [
              null,
              '',
            ],
            boxSizing: '',
            height: [
              null,
              '',
            ],
          },
        },
        wrap: {
          backgroundGroup: {
            backgroundColor: 'rgba(180, 0, 3, 0.6)',
          },
          font: {
            color: 'rgba(255, 255, 255, 1)',
            fontSize: [
              26,
              null,
            ],
          },
          display: {
            overflow: 'visible',
            padding: [
              [
                10,
                null,
              ],
              [
                10,
                null,
              ],
              [
                10,
                null,
              ],
              [
                10,
                null,
              ],
            ],
          },
          border: {
            radiusTopLeft: [
              10,
              null,
            ],
            radiusTopRight: [
              10,
              null,
            ],
            radiusBottomLeft: [
              10,
              null,
            ],
            radiusBottomRight: [
              10,
              null,
            ],
          },
        },
        paragraph: {
          font: {
            fontSize: [
              25,
              null,
            ],
          },
          display: {
            margin: [
              [
                null,
                null,
              ],
              [
                null,
                null,
              ],
              [
                20,
                null,
              ],
              [
                null,
                null,
              ],
            ],
          },
        },
        prefix: {},
        even: {},
        odd: {},
        first: {},
        last: {},
      },
      content: {
        text: 1,
      },
      type: 'Text',
      events: {
        mount: [
          {
            name: 'a4751c27-179a-40bb-a13a-c6fa2252b719/setText',
            arguments: [
              {
                type: 'array',
                name: '文本内容',
                describe: '可设置多行文本内容',
                html: true,
                data: [
                  '本次活动共设有两个奖项，最佳新锐主播，最佳红人主播',
                  '奖项设置：最佳新人奖金2000元人民币，最佳红人奖金2000元人民币',
                ],
                fieldName: 'textArray',
              },
              {
                type: 'boolean',
                name: '自动序号',
                describe: '自动生成1开始的序号',
                data: {
                  comparableAverageA: 'a',
                  comparableAverageB: 'a',
                  method: '===',
                },
                fieldName: 'autoNumber',
              },
            ],
          },
        ],
      },
    },
    {
      moduleName: '线上比赛时间',
      moduleId: '30a5791f-bfdb-4216-8907-43383d88be6c',
      layout: {
        w: 22,
        h: 4,
        x: 1,
        y: 33,
        i: '30a5791f-bfdb-4216-8907-43383d88be6c',
        moved: false,
        static: false,
      },
      style: {
        basic: {
          font: {
            align: 'left',
          },
          border: {
            radiusTopLeft: [
              10,
              null,
            ],
            radiusTopRight: [
              10,
              null,
            ],
            radiusBottomLeft: [
              10,
              null,
            ],
            radiusBottomRight: [
              10,
              null,
            ],
          },
        },
        wrap: {
          backgroundGroup: {
            backgroundColor: 'rgba(180, 0, 3, 0.6)',
          },
          font: {
            color: 'rgba(255, 255, 255, 1)',
            fontSize: [
              26,
              null,
            ],
          },
          display: {
            overflow: 'visible',
            padding: [
              [
                10,
                null,
              ],
              [
                15,
                null,
              ],
              [
                10,
                null,
              ],
              [
                15,
                null,
              ],
            ],
          },
          border: {
            radiusTopLeft: [
              10,
              null,
            ],
            radiusTopRight: [
              10,
              null,
            ],
            radiusBottomLeft: [
              10,
              null,
            ],
            radiusBottomRight: [
              10,
              null,
            ],
          },
        },
        paragraph: {},
        prefix: {},
        even: {},
        odd: {},
        first: {
          font: {
            fontSize: [
              30,
              null,
            ],
            fontWeight: 'bold',
          },
          textShadow: [
            {
              hiddenItem: false,
              color: 'rgba(0, 0, 0, 1 )',
              blur: [
                null,
                null,
              ],
              shiftRight: [
                2,
                null,
              ],
              shiftDown: [
                2,
                null,
              ],
            },
            {
              hiddenItem: false,
              shiftRight: [
                -2,
                null,
              ],
              shiftDown: [
                -2,
                null,
              ],
              blur: [
                null,
                null,
              ],
              color: 'rgba(0, 0, 0, 1 )',
            },
          ],
        },
        last: {
          font: {
            fontSize: [
              25,
              null,
            ],
            lineHeight: [
              42,
              null,
            ],
          },
        },
      },
      content: {
        text: 1,
      },
      type: 'Text',
      events: {
        mount: [
          {
            name: '30a5791f-bfdb-4216-8907-43383d88be6c/setText',
            arguments: [
              {
                type: 'array',
                name: '文本内容',
                describe: '可设置多行文本内容',
                html: true,
                data: [
                  '线上比赛时间',
                  '10月10日 10:00 到 10月15日 0:00',
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
    },
    {
      moduleName: '参与方式',
      moduleId: '2d8fa157-71cb-4e09-bcba-255acc3140e7',
      layout: {
        w: 22,
        h: 4,
        x: 1,
        y: 38,
        i: '2d8fa157-71cb-4e09-bcba-255acc3140e7',
        moved: false,
        static: false,
      },
      style: {
        basic: {
          font: {
            align: 'left',
          },
          border: {
            radiusTopLeft: [
              10,
              null,
            ],
            radiusTopRight: [
              10,
              null,
            ],
            radiusBottomLeft: [
              10,
              null,
            ],
            radiusBottomRight: [
              10,
              null,
            ],
          },
        },
        wrap: {
          backgroundGroup: {
            backgroundColor: 'rgba(180, 0, 3, 0.6)',
          },
          font: {
            color: 'rgba(255, 255, 255, 1)',
            fontSize: [
              26,
              null,
            ],
          },
          display: {
            overflow: 'visible',
            padding: [
              [
                10,
                null,
              ],
              [
                15,
                null,
              ],
              [
                10,
                null,
              ],
              [
                15,
                null,
              ],
            ],
          },
          border: {
            radiusTopLeft: [
              10,
              null,
            ],
            radiusTopRight: [
              10,
              null,
            ],
            radiusBottomLeft: [
              10,
              null,
            ],
            radiusBottomRight: [
              10,
              null,
            ],
          },
        },
        paragraph: {},
        prefix: {},
        even: {},
        odd: {},
        first: {
          font: {
            fontSize: [
              30,
              null,
            ],
            fontWeight: 'bold',
          },
          textShadow: [
            {
              hiddenItem: false,
              color: 'rgba(0, 0, 0, 1 )',
              blur: [
                null,
                null,
              ],
              shiftRight: [
                2,
                null,
              ],
              shiftDown: [
                2,
                null,
              ],
            },
            {
              hiddenItem: false,
              shiftRight: [
                -2,
                null,
              ],
              shiftDown: [
                -2,
                null,
              ],
              blur: [
                null,
                null,
              ],
              color: 'rgba(0, 0, 0, 1 )',
            },
          ],
        },
        last: {
          font: {
            fontSize: [
              25,
              null,
            ],
            lineHeight: [
              42,
              null,
            ],
          },
        },
      },
      content: {
        text: 1,
      },
      type: 'Text',
      events: {
        mount: [
          {
            name: '2d8fa157-71cb-4e09-bcba-255acc3140e7/setText',
            arguments: [
              {
                type: 'array',
                name: '文本内容',
                describe: '可设置多行文本内容',
                html: true,
                data: [
                  '参与方式',
                  '一至开播带<span style="color:#ffe4bb"> #校园红人季 </span>话题并同步到微博',
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
    },
    {
      moduleName: '校园新锐主播',
      moduleId: 'dae5561a-a300-43a3-b93f-23116f5dda49',
      layout: {
        w: 22,
        h: 1,
        x: 1,
        y: 26,
        i: 'dae5561a-a300-43a3-b93f-23116f5dda49',
        moved: false,
        static: false,
      },
      style: {
        basic: {
          font: {
            align: 'left',
          },
          display: {
            height: [
              null,
              null,
            ],
          },
        },
        wrap: {
          display: {
            position: 'absolute',
            overflow: 'visible',
            width: [
              100,
              '%',
            ],
            height: [
              2,
              null,
            ],
            left: [
              0,
              null,
            ],
            top: [
              null,
              null,
            ],
          },
          backgroundGroup: {
            backgroundColor: 'rgba(0, 0, 0, 1)',
          },
        },
        paragraph: {
          display: {
            width: [
              200,
              null,
            ],
            height: [
              50,
              null,
            ],
            position: 'absolute',
            overflow: 'visible',
            left: [
              50,
              '%',
            ],
            margin: [
              [
                -30,
                null,
              ],
              null,
              null,
              [
                -100,
                null,
              ],
            ],
          },
          backgroundGroup: {
            backgroundColor: 'rgba(254, 223, 177, 1)',
          },
          font: {
            lineHeight: [
              50,
              null,
            ],
            align: 'center',
            fontWeight: 'bold',
          },
          border: {
            borderPosition: {
              border: true,
              borderTop: false,
              borderRight: false,
              borderLeft: false,
              borderBottom: false,
            },
            borderStyle: 'solid',
            borderColor: 'rgba(0, 0, 0, 1)',
            radiusTopLeft: [
              40,
              null,
            ],
            radiusTopRight: [
              40,
              null,
            ],
            radiusBottomLeft: [
              40,
              null,
            ],
            radiusBottomRight: [
              40,
              null,
            ],
            borderWidth: [
              4,
              null,
            ],
          },
        },
        prefix: {},
        even: {},
        odd: {},
        first: {},
        last: {},
      },
      content: {
        text: 1,
      },
      type: 'Text',
      events: {
        mount: [
          {
            name: 'dae5561a-a300-43a3-b93f-23116f5dda49/setText',
            arguments: [
              {
                type: 'array',
                name: '文本内容',
                describe: '可设置多行文本内容',
                html: true,
                data: [
                  '校园新锐主播',
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
    },
    {
      moduleName: '马上报名',
      moduleId: '804966c7-0da8-4f0b-b20a-9c404482bef2',
      layout: {
        w: 22,
        h: 1,
        x: 1,
        y: 44,
        i: '804966c7-0da8-4f0b-b20a-9c404482bef2',
        moved: false,
        static: false,
      },
      style: {
        basic: {
          font: {
            align: 'left',
          },
          display: {
            height: [
              null,
              null,
            ],
          },
        },
        wrap: {
          display: {
            position: 'absolute',
            overflow: 'visible',
            width: [
              100,
              '%',
            ],
            height: [
              2,
              null,
            ],
            left: [
              0,
              null,
            ],
            top: [
              null,
              null,
            ],
          },
          backgroundGroup: {
            backgroundColor: 'rgba(0, 0, 0, 1)',
          },
        },
        paragraph: {
          display: {
            width: [
              200,
              null,
            ],
            height: [
              50,
              null,
            ],
            position: 'absolute',
            overflow: 'visible',
            left: [
              50,
              '%',
            ],
            margin: [
              [
                -30,
                null,
              ],
              null,
              null,
              [
                -100,
                null,
              ],
            ],
          },
          backgroundGroup: {
            backgroundColor: 'rgba(254, 223, 177, 1)',
          },
          font: {
            lineHeight: [
              50,
              null,
            ],
            align: 'center',
            fontWeight: 'bold',
          },
          border: {
            borderPosition: {
              border: true,
              borderTop: false,
              borderRight: false,
              borderLeft: false,
              borderBottom: false,
            },
            borderStyle: 'solid',
            borderColor: 'rgba(0, 0, 0, 1)',
            radiusTopLeft: [
              40,
              null,
            ],
            radiusTopRight: [
              40,
              null,
            ],
            radiusBottomLeft: [
              40,
              null,
            ],
            radiusBottomRight: [
              40,
              null,
            ],
            borderWidth: [
              4,
              null,
            ],
          },
        },
        prefix: {},
        even: {},
        odd: {},
        first: {},
        last: {},
      },
      content: {
        text: 1,
      },
      type: 'Text',
      events: {
        mount: [
          {
            name: '804966c7-0da8-4f0b-b20a-9c404482bef2/setText',
            arguments: [
              {
                type: 'array',
                name: '文本内容',
                describe: '可设置多行文本内容',
                html: true,
                data: [
                  '马上报名',
                ],
                fieldName: 'textArray',
              },
              {
                type: 'boolean',
                name: '自动序号',
                describe: '自动生成1开始的序号',
                data: {
                  comparableAverageA: 'a',
                  comparableAverageB: '',
                  method: '===',
                },
                fieldName: 'autoNumber',
              },
            ],
          },
        ],
      },
    },
    {
      moduleName: '报名表单',
      moduleId: 'c851420e-4201-43a7-9246-fc1bed225521',
      layout: {
        w: 22,
        h: 48,
        x: 1,
        y: 46,
        i: 'c851420e-4201-43a7-9246-fc1bed225521',
        moved: false,
        static: false,
      },
      style: {
        basic: {
          backgroundGroup: {
            backgroundColor: 'rgba(180, 0, 3, 0.6)',
          },
          font: {
            color: 'rgba(255, 255, 255, 1)',
          },
          border: {
            radiusTopLeft: [
              10,
              null,
            ],
            radiusTopRight: [
              10,
              null,
            ],
            radiusBottomLeft: [
              10,
              null,
            ],
            radiusBottomRight: [
              10,
              null,
            ],
          },
          display: {
            padding: [
              [
                null,
                null,
              ],
              [
                null,
                null,
              ],
              [
                50,
                null,
              ],
              [
                null,
                null,
              ],
            ],
            width: [
              100,
              '%',
            ],
            boxSizing: 'border-box',
            overflow: 'visible',
          },
        },
        wrap: {
          display: {
            width: [
              100,
              '%',
            ],
            boxSizing: 'border-box',
            height: [
              null,
              null,
            ],
          },
        },
        header: {
          display: {
            display: 'none',
          },
        },
        container: {
          display: {
            width: [
              100,
              '%',
            ],
            boxSizing: 'border-box',
          },
        },
        formitem: {
          backgroundGroup: {},
          display: {
            width: [
              100,
              '%',
            ],
            boxSizing: 'border-box',
          },
        },
        label: {
          font: {
            color: 'rgba(255, 223, 178, 1)',
          },
        },
        icon: {
          font: {
            color: 'rgba(255, 223, 178, 1)',
            fontSize: [
              40,
              null,
            ],
          },
        },
        activity: {},
        validateError: {
          font: {
            color: 'rgba(255, 235, 59, 1)',
          },
        },
        baseline: {
          backgroundGroup: {},
          border: {
            borderPosition: {
              borderTop: false,
              borderRight: false,
              borderBottom: true,
              borderLeft: false,
              border: false,
            },
            borderStyle: 'solid',
            borderColor: 'rgba(252, 224, 189, 1)',
            borderWidth: [
              2,
              null,
            ],
          },
        },
        baselineact: {},
        errorbaseline: {},
        footer: {},
        button: {},
        oknormal: {
          display: {
            display: 'block',
            width: [
              80,
              '%',
            ],
            height: [
              null,
              null,
            ],
            margin: [
              [
                10,
                null,
              ],
              [
                'auto',
                '-',
              ],
              [
                20,
                null,
              ],
              [
                'auto',
                '-',
              ],
            ],
          },
          backgroundGroup: {
            backgroundColor: 'rgba(255, 220, 175, 1)',
          },
          border: {
            radiusTopLeft: [
              60,
              null,
            ],
            radiusTopRight: [
              60,
              null,
            ],
            radiusBottomLeft: [
              60,
              null,
            ],
            radiusBottomRight: [
              60,
              null,
            ],
            borderPosition: {
              border: true,
              borderTop: false,
              borderRight: false,
              borderLeft: false,
              borderBottom: false,
            },
            borderColor: 'rgba(143, 2, 2, 1)',
            borderStyle: 'solid',
            borderWidth: [
              3,
              null,
            ],
          },
          font: {
            fontSize: [
              30,
              null,
            ],
            fontWeight: 'bold',
            color: 'rgba(0, 0, 0, 1)',
          },
          boxShadow: [
            {
              hiddenItem: false,
              color: 'rgba(99, 8, 22, 1 )',
              spread: [
                1,
                null,
              ],
              blur: [
                -1,
                null,
              ],
            },
            {
              hiddenItem: false,
              inset: true,
              color: 'rgba(212, 202, 200, 1 )',
              spread: [
                9,
                null,
              ],
              shiftRight: [
                null,
                null,
              ],
            },
          ],
        },
        okdisabled: {},
        resetnormal: {
          display: {
            width: [
              80,
              '%',
            ],
            display: 'none',
          },
        },
      },
      content: {
        text: 1,
      },
      type: 'Form',
      events: {
        mount: [
          {
            name: 'global/injectGlobal',
            arguments: [
              {
                type: 'string',
                name: '变量名',
                fieldName: 'name',
                describe: '唯一(英文)全局变量名',
                data: 'formlist',
              },
              {
                type: 'mixed',
                name: '变量值',
                fieldName: 'value',
                describe: '请输入变量数据',
                data: [
                  {
                    fieldName: 'name',
                    label: '姓名',
                    type: 'text',
                    defaultValue: '张三',
                    rules: {
                      string: {
                        required: [
                          '请输入字符',
                        ],
                        min: [
                          2,
                          '请输入长度大于2的字符',
                        ],
                      },
                    },
                  },
                  {
                    fieldName: 'phone',
                    label: '手机号码',
                    defaultValue: '13623421232',
                    maxLength: '11',
                    type: 'text',
                    rules: {
                      string: {
                        required: [
                          '请输入手机号码',
                        ],
                        matches: [
                          '^1\\d{10}$',
                          '请输入以1开头的11位手机号码！',
                        ],
                      },
                    },
                  },
                  {
                    fieldName: 'sex',
                    label: '性别',
                    type: 'radiogroup',
                    defaultValue: '1',
                    options: [
                      {
                        label: '男',
                        value: '1',
                      },
                      {
                        label: '女',
                        value: '0',
                      },
                    ],
                    rules: {
                      mixed: {
                        required: [
                          '请选择性别',
                        ],
                      },
                    },
                  },
                  {
                    fieldName: 'classes',
                    label: '班级',
                    type: 'select',
                    defaultValue: '1',
                    options: [
                      {
                        label: '一班',
                        value: '1',
                      },
                      {
                        label: '二班',
                        value: '2',
                      },
                      {
                        label: '三班',
                        value: '3',
                      },
                      {
                        label: '四班',
                        value: '4',
                      },
                    ],
                    rules: {
                      mixed: {
                        required: [
                          '请选择性别',
                        ],
                      },
                    },
                  },
                  {
                    fieldName: 'birthday',
                    label: '生日',
                    defaultValue: '1990-06-15',
                    type: 'date',
                    rules: {
                      date: {
                        max: [
                          '2020/06/15',
                          '出生日期不能大于2020/06/15',
                        ],
                      },
                    },
                  },
                  {
                    fieldName: 'hobby',
                    label: '爱好',
                    defaultValue: [
                      0,
                      1,
                    ],
                    type: 'checkboxgroup',
                    options: [
                      {
                        label: '足球',
                        value: 0,
                      },
                      {
                        label: '篮球',
                        value: 1,
                      },
                      {
                        label: '羽毛球',
                        value: 2,
                      },
                    ],
                    rules: {
                      array: {
                        required: [
                          '请选择兴趣爱好',
                        ],
                        min: [
                          1,
                          '请至少选择一项',
                        ],
                      },
                    },
                  },
                ],
              },
            ],
          },
          {
            name: 'c851420e-4201-43a7-9246-fc1bed225521/setFormData',
            arguments: [
              {
                type: 'runningTime',
                name: '表单数据',
                describe: '设置表单数据',
                data: 'formlist',
                fieldName: 'formdata',
              },
            ],
          },
        ],
        submit: [
          {
            name: 'c851420e-4201-43a7-9246-fc1bed225521/',
            arguments: [],
          },
        ],
      },
      api: [
        {
          apiId: 'afterClick',
          name: '提交表单(由提交表单事件自动收集表单数据)',
          hideBodyInput: true,
          method: 'POST',
          url: 'http://www.baidu.com',
          successPublic: [
            {
              type: 'string',
              data: '{{result}}',
              fieldName: 'ok',
              name: 'ok',
            },
          ],
        },
      ],
    },
    {
      moduleName: '头图',
      moduleId: '2d4eb510-28af-4dd7-8110-ba341bb5e07c',
      layout: {
        w: 24,
        h: 16,
        x: 0,
        y: 0,
        i: '2d4eb510-28af-4dd7-8110-ba341bb5e07c',
        moved: false,
        static: false,
      },
      style: {
        basic: {},
        image: {},
      },
      type: 'Image',
      events: {
        mount: [
          {
            name: '2d4eb510-28af-4dd7-8110-ba341bb5e07c/setImg',
            arguments: [
              {
                type: 'object',
                name: '图片路径与属性',
                describe: '图片路径/属性/跳转url',
                data: {
                  url: 'https://yyjzx.blob.core.chinacloudapi.cn/upload-test/images/0520105344382.jpg',
                  alt: '',
                  linkUrl: 'http://www.baidu.com',
                },
                fieldName: 'img',
              },
            ],
          },
        ],
      },
    },
  ],
};
