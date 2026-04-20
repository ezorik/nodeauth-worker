const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/qrScanner-DmEci2Yx.js","assets/element-plus-Dh0klhaa.js","assets/vue-core-Daban9YF.js","assets/element-plus-Dh61In7b.css","assets/qr-utils-DSii33i3.js","assets/index-D2jVkTrJ.js","assets/pdf-utils-r4RjNe6V.js","assets/compression-utils-CXh1ITwj.js","assets/simplewebauthn-3qpiAaRi.js","assets/tanstack-query-C-OQsQoR.js","assets/index-CKCC89YU.css"])))=>i.map(i=>d[i]);
import { _ as G, __tla as __tla_0 } from "./pdf-utils-r4RjNe6V.js";
import { p as Q, f as X, ay as J, aF as Y, aR as j, a1 as K, G as W, i as x, d as ee, az as ae, Z as le, R as te, _ as oe, $ as se, F as re, a8 as ie, aP as ne, X as ue, E, o as ce } from "./element-plus-Dh0klhaa.js";
import { p as de, v as R, u as F, f as me, __tla as __tla_1 } from "./vaultService-B9_L09VX.js";
import { a as ve, u as _e, p as pe, i as fe, __tla as __tla_2 } from "./index-D2jVkTrJ.js";
import { f as ge, I as m, M as g, Q as i, O as e, P as o, u as v, _ as f, Y as A, F as be, ac as he, J as T, X as ye, Z as we, e as y, c as Ve, E as u, aD as Se } from "./vue-core-Daban9YF.js";
import "./compression-utils-CXh1ITwj.js";
import "./simplewebauthn-3qpiAaRi.js";
import "./tanstack-query-C-OQsQoR.js";
let We;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_1;
        } catch  {}
    })(),
    (()=>{
        try {
            return __tla_2;
        } catch  {}
    })()
]).then(async ()=>{
    let $e, Ee, Ae, Te, ke, Me, Ue, Be, Re, Fe, Ce, De, He, Oe, qe, Ie, Le, Ne, Pe;
    $e = {
        class: "add-vault-wrapper"
    };
    Ee = {
        class: "tab-card-wrapper"
    };
    Ae = {
        class: "page-header-container"
    };
    Te = {
        class: "page-header-hero"
    };
    ke = {
        class: "hero-icon-wrapper"
    };
    Me = {
        key: 0
    };
    Ue = {
        class: "page-desc-text"
    };
    Be = {
        class: "max-w-600 m-auto"
    };
    Re = {
        class: "batch-import-container-top mb-10"
    };
    Fe = {
        class: "card-left"
    };
    Ce = {
        class: "icon-ring"
    };
    De = {
        class: "text-meta"
    };
    He = {
        class: "entry-title"
    };
    Oe = {
        class: "entry-desc"
    };
    qe = {
        class: "flex-center mb-20"
    };
    Ie = {
        class: "flex-center gap-5"
    };
    Le = {
        key: 0
    };
    Ne = {
        key: 1,
        class: "vault-manual-form-container"
    };
    Pe = {
        class: "m-auto w-full"
    };
    We = {
        __name: "addVault",
        emits: [
            "success"
        ],
        setup (ze, { emit: C }) {
            const D = Se(()=>G(()=>import("./qrScanner-DmEci2Yx.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))), k = C, b = ve(), M = _e(), U = pe(), { t: s } = fe.global, _ = y("camera"), H = Ve(()=>[
                    {
                        label: s("vault.add_mode_camera"),
                        value: "camera",
                        icon: ie
                    },
                    {
                        label: s("vault.add_mode_image"),
                        value: "image",
                        icon: ne
                    },
                    {
                        label: s("vault.add_account"),
                        value: "manual",
                        icon: ue
                    }
                ]), w = y(!1), V = y(null), t = y({
                service: "",
                account: "",
                secret: "",
                category: "",
                digits: 6,
                period: 30,
                algorithm: "SHA1"
            }), O = (a, l, n)=>{
                if (!l) return n(new Error(s("vault.require_secret")));
                const p = l.replace(/\s/g, "");
                if (p.length < 16) return n(new Error(s("vault.secret_min_length")));
                if (!/^[A-Z2-7]+$/i.test(p)) return n(new Error(s("vault.secret_invalid_char")));
                n();
            }, q = {
                service: [
                    {
                        required: !0,
                        message: s("vault.require_service"),
                        trigger: "blur"
                    }
                ],
                account: [
                    {
                        required: !0,
                        message: s("vault.require_account"),
                        trigger: "blur"
                    }
                ],
                secret: [
                    {
                        required: !0,
                        validator: O,
                        trigger: "blur"
                    }
                ]
            };
            ge(()=>t.value.algorithm, (a)=>{
                a === "STEAM" ? (t.value.digits = 5, t.value.period = 30, t.value.service || (t.value.service = "Steam")) : t.value.digits === 5 && (t.value.digits = 6, t.value.service === "Steam" && (t.value.service = ""));
            });
            const I = ()=>{
                const a = new Uint8Array(20);
                window.crypto.getRandomValues(a), t.value.secret = me(a);
            }, L = async ()=>{
                V.value && await V.value.validate(async (a)=>{
                    if (a) {
                        w.value = !0;
                        try {
                            if ((await R.createAccount(t.value)).success) {
                                U.isOffline || await b.updateMetadata({
                                    delta: 1
                                }), E.success(s("vault.add_success")), t.value = {
                                    service: "",
                                    account: "",
                                    secret: "",
                                    category: "",
                                    digits: 6,
                                    period: 30,
                                    algorithm: "SHA1"
                                }, b.markDirty();
                                const { fetchTrash: n } = F();
                                n(), k("success");
                            }
                        } catch  {} finally{
                            w.value = !1;
                        }
                    }
                });
            }, N = async (a)=>{
                try {
                    const l = de(a);
                    if (!l) {
                        E.error(s("vault.invalid_qr_format"));
                        return;
                    }
                    if (await ce.confirm(u("div", {
                        class: "confirmation-box"
                    }, [
                        u("div", {
                            class: "confirmation-row"
                        }, [
                            u("span", {
                                class: "confirmation-label"
                            }, s("vault.service_label")),
                            u("span", {
                                class: "confirmation-value"
                            }, l.service || s("vault.unknown_service"))
                        ]),
                        u("div", {
                            class: "confirmation-row"
                        }, [
                            u("span", {
                                class: "confirmation-label"
                            }, s("vault.account_label")),
                            u("span", {
                                class: "confirmation-value mono"
                            }, l.account || s("vault.unnamed_account"))
                        ]),
                        u("div", {
                            class: "confirmation-row"
                        }, [
                            u("span", {
                                class: "confirmation-label"
                            }, s("vault.param_label")),
                            u("div", {
                                class: "confirmation-tags"
                            }, [
                                u("span", {
                                    class: "confirmation-tag confirmation-tag-info"
                                }, l.algorithm || "SHA1"),
                                u("span", {
                                    class: "confirmation-tag confirmation-tag-success"
                                }, `${l.digits || 6}${s("vault.digits_suffix")}`),
                                u("span", {
                                    class: "confirmation-tag confirmation-tag-warning"
                                }, `${l.period || 30}${s("vault.period_suffix")}`)
                            ])
                        ])
                    ]), s("vault.confirm_add_title"), {
                        confirmButtonText: s("common.confirm"),
                        cancelButtonText: s("common.cancel"),
                        type: "success",
                        center: !0
                    }), (await R.addFromUri(a, "Scan")).success) {
                        U.isOffline || await b.updateMetadata({
                            delta: 1
                        }), E.success(s("vault.add_success")), b.markDirty();
                        const { fetchTrash: p } = F();
                        p(), k("success");
                    }
                } catch (l) {
                    l !== "cancel" && console.error(l);
                }
            };
            return (a, l)=>{
                const n = X, p = j, P = K, h = x, d = W, B = ee, c = se, S = oe, $ = te, z = le, Z = re;
                return m(), g("div", $e, [
                    i("div", Ee, [
                        i("div", Ae, [
                            i("div", Te, [
                                i("div", ke, [
                                    e(n, {
                                        size: 28
                                    }, {
                                        default: o(()=>[
                                                e(v(Q))
                                            ]),
                                        _: 1
                                    })
                                ]),
                                v(M).isMobile ? A("", !0) : (m(), g("h2", Me, f(a.$t("menu.add")), 1))
                            ]),
                            i("p", Ue, f(a.$t("vault.add_account_tip")), 1)
                        ]),
                        i("div", Be, [
                            i("div", Re, [
                                i("div", {
                                    class: "import-card-hero",
                                    onClick: l[0] || (l[0] = (r)=>v(M).setActiveTab("migration-import"))
                                }, [
                                    i("div", Fe, [
                                        i("div", Ce, [
                                            e(n, null, {
                                                default: o(()=>[
                                                        e(v(J))
                                                    ]),
                                                _: 1
                                            })
                                        ]),
                                        i("div", De, [
                                            i("div", He, f(a.$t("vault.batch_import_entry_title")), 1),
                                            i("div", Oe, f(a.$t("vault.batch_import_entry_desc")), 1)
                                        ])
                                    ]),
                                    e(n, {
                                        class: "card-arrow"
                                    }, {
                                        default: o(()=>[
                                                e(v(Y))
                                            ]),
                                        _: 1
                                    })
                                ])
                            ]),
                            i("div", qe, [
                                e(P, {
                                    modelValue: _.value,
                                    "onUpdate:modelValue": l[1] || (l[1] = (r)=>_.value = r),
                                    class: "mode-switcher-radio"
                                }, {
                                    default: o(()=>[
                                            (m(!0), g(be, null, he(H.value, (r)=>(m(), T(p, {
                                                    key: r.value,
                                                    label: r.value
                                                }, {
                                                    default: o(()=>[
                                                            i("div", Ie, [
                                                                e(n, null, {
                                                                    default: o(()=>[
                                                                            (m(), T(ye(r.icon)))
                                                                        ]),
                                                                    _: 2
                                                                }, 1024),
                                                                i("span", null, f(r.label), 1)
                                                            ])
                                                        ]),
                                                    _: 2
                                                }, 1032, [
                                                    "label"
                                                ]))), 128))
                                        ]),
                                    _: 1
                                }, 8, [
                                    "modelValue"
                                ])
                            ]),
                            _.value === "camera" || _.value === "image" ? (m(), g("div", Le, [
                                e(v(D), {
                                    "force-mode": _.value,
                                    onScanSuccess: N
                                }, null, 8, [
                                    "force-mode"
                                ])
                            ])) : _.value === "manual" ? (m(), g("div", Ne, [
                                i("div", Pe, [
                                    e(Z, {
                                        model: t.value,
                                        "label-position": "top",
                                        rules: q,
                                        ref_key: "addFormRef",
                                        ref: V,
                                        class: "vault-manual-form-wrapper"
                                    }, {
                                        default: o(()=>[
                                                e(d, {
                                                    label: a.$t("vault.service_name"),
                                                    prop: "service"
                                                }, {
                                                    default: o(()=>[
                                                            e(h, {
                                                                modelValue: t.value.service,
                                                                "onUpdate:modelValue": l[2] || (l[2] = (r)=>t.value.service = r),
                                                                placeholder: a.$t("vault.input_service_placeholder")
                                                            }, null, 8, [
                                                                "modelValue",
                                                                "placeholder"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "label"
                                                ]),
                                                e(d, {
                                                    label: a.$t("vault.account_identifier"),
                                                    prop: "account"
                                                }, {
                                                    default: o(()=>[
                                                            e(h, {
                                                                modelValue: t.value.account,
                                                                "onUpdate:modelValue": l[3] || (l[3] = (r)=>t.value.account = r),
                                                                placeholder: a.$t("vault.input_account_placeholder")
                                                            }, null, 8, [
                                                                "modelValue",
                                                                "placeholder"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "label"
                                                ]),
                                                e(d, {
                                                    label: a.$t("vault.input_secret_label"),
                                                    prop: "secret"
                                                }, {
                                                    default: o(()=>[
                                                            e(h, {
                                                                modelValue: t.value.secret,
                                                                "onUpdate:modelValue": l[4] || (l[4] = (r)=>t.value.secret = r),
                                                                placeholder: a.$t("vault.input_secret_placeholder"),
                                                                clearable: ""
                                                            }, {
                                                                append: o(()=>[
                                                                        e(B, {
                                                                            onClick: I,
                                                                            title: a.$t("vault.generate_random_secret")
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    e(n, null, {
                                                                                        default: o(()=>[
                                                                                                e(v(ae))
                                                                                            ]),
                                                                                        _: 1
                                                                                    })
                                                                                ]),
                                                                            _: 1
                                                                        }, 8, [
                                                                            "title"
                                                                        ])
                                                                    ]),
                                                                _: 1
                                                            }, 8, [
                                                                "modelValue",
                                                                "placeholder"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "label"
                                                ]),
                                                e(z, {
                                                    gutter: 20
                                                }, {
                                                    default: o(()=>[
                                                            e($, {
                                                                span: 8
                                                            }, {
                                                                default: o(()=>[
                                                                        e(d, {
                                                                            label: a.$t("vault.algorithm_label"),
                                                                            prop: "algorithm"
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    e(S, {
                                                                                        modelValue: t.value.algorithm,
                                                                                        "onUpdate:modelValue": l[5] || (l[5] = (r)=>t.value.algorithm = r),
                                                                                        class: "w-full"
                                                                                    }, {
                                                                                        default: o(()=>[
                                                                                                e(c, {
                                                                                                    label: a.$t("vault.algo_sha1"),
                                                                                                    value: "SHA1"
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ]),
                                                                                                e(c, {
                                                                                                    label: "SHA256",
                                                                                                    value: "SHA256"
                                                                                                }),
                                                                                                e(c, {
                                                                                                    label: "SHA512",
                                                                                                    value: "SHA512"
                                                                                                }),
                                                                                                e(c, {
                                                                                                    label: a.$t("vault.algo_steam"),
                                                                                                    value: "STEAM"
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ])
                                                                                            ]),
                                                                                        _: 1
                                                                                    }, 8, [
                                                                                        "modelValue"
                                                                                    ])
                                                                                ]),
                                                                            _: 1
                                                                        }, 8, [
                                                                            "label"
                                                                        ])
                                                                    ]),
                                                                _: 1
                                                            }),
                                                            e($, {
                                                                span: 8
                                                            }, {
                                                                default: o(()=>[
                                                                        e(d, {
                                                                            label: a.$t("vault.digits_label"),
                                                                            prop: "digits"
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    e(S, {
                                                                                        modelValue: t.value.digits,
                                                                                        "onUpdate:modelValue": l[6] || (l[6] = (r)=>t.value.digits = r),
                                                                                        class: "w-full",
                                                                                        disabled: t.value.algorithm === "STEAM"
                                                                                    }, {
                                                                                        default: o(()=>[
                                                                                                t.value.algorithm === "STEAM" ? (m(), T(c, {
                                                                                                    key: 0,
                                                                                                    label: a.$t("vault.digits_5"),
                                                                                                    value: 5
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ])) : A("", !0),
                                                                                                e(c, {
                                                                                                    label: a.$t("vault.digits_6"),
                                                                                                    value: 6
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ]),
                                                                                                e(c, {
                                                                                                    label: a.$t("vault.digits_8"),
                                                                                                    value: 8
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ])
                                                                                            ]),
                                                                                        _: 1
                                                                                    }, 8, [
                                                                                        "modelValue",
                                                                                        "disabled"
                                                                                    ])
                                                                                ]),
                                                                            _: 1
                                                                        }, 8, [
                                                                            "label"
                                                                        ])
                                                                    ]),
                                                                _: 1
                                                            }),
                                                            e($, {
                                                                span: 8
                                                            }, {
                                                                default: o(()=>[
                                                                        e(d, {
                                                                            label: a.$t("vault.period_label"),
                                                                            prop: "period"
                                                                        }, {
                                                                            default: o(()=>[
                                                                                    e(S, {
                                                                                        modelValue: t.value.period,
                                                                                        "onUpdate:modelValue": l[7] || (l[7] = (r)=>t.value.period = r),
                                                                                        class: "w-full",
                                                                                        disabled: t.value.algorithm === "STEAM"
                                                                                    }, {
                                                                                        default: o(()=>[
                                                                                                e(c, {
                                                                                                    label: a.$t("vault.period_30s"),
                                                                                                    value: 30
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ]),
                                                                                                e(c, {
                                                                                                    label: a.$t("vault.period_60s"),
                                                                                                    value: 60
                                                                                                }, null, 8, [
                                                                                                    "label"
                                                                                                ])
                                                                                            ]),
                                                                                        _: 1
                                                                                    }, 8, [
                                                                                        "modelValue",
                                                                                        "disabled"
                                                                                    ])
                                                                                ]),
                                                                            _: 1
                                                                        }, 8, [
                                                                            "label"
                                                                        ])
                                                                    ]),
                                                                _: 1
                                                            })
                                                        ]),
                                                    _: 1
                                                }),
                                                e(d, {
                                                    label: a.$t("vault.category_optional"),
                                                    prop: "category"
                                                }, {
                                                    default: o(()=>[
                                                            e(h, {
                                                                modelValue: t.value.category,
                                                                "onUpdate:modelValue": l[8] || (l[8] = (r)=>t.value.category = r),
                                                                placeholder: a.$t("vault.input_category_placeholder")
                                                            }, null, 8, [
                                                                "modelValue",
                                                                "placeholder"
                                                            ])
                                                        ]),
                                                    _: 1
                                                }, 8, [
                                                    "label"
                                                ]),
                                                e(d, {
                                                    class: "mt-30"
                                                }, {
                                                    default: o(()=>[
                                                            e(B, {
                                                                type: "primary",
                                                                loading: w.value,
                                                                onClick: L,
                                                                class: "vault-manual-submit-btn",
                                                                size: "large"
                                                            }, {
                                                                default: o(()=>[
                                                                        we(f(a.$t("vault.confirm_add_btn")), 1)
                                                                    ]),
                                                                _: 1
                                                            }, 8, [
                                                                "loading"
                                                            ])
                                                        ]),
                                                    _: 1
                                                })
                                            ]),
                                        _: 1
                                    }, 8, [
                                        "model"
                                    ])
                                ])
                            ])) : A("", !0)
                        ])
                    ])
                ]);
            };
        }
    };
});
export { We as default, __tla };
