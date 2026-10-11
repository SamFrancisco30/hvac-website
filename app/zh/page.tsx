import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, BellRing, CalendarCheck, ChevronRight, Flame, PhoneCall, ShieldCheck, Snowflake, Wrench } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "安省热泵补贴查询 | WARMWISE",
  description:
    "GTA 华人暖通公司：安省换热泵最高拿 $7,500 补贴，联邦 2027 年再加最高 $10,000。持牌师傅安装，中文沟通，60 秒查你家能拿多少。",
};

const services = [
  { icon: Flame, title: "暖气炉", text: "老炉子维修、更换，高效新机型，当天上门。" },
  { icon: Snowflake, title: "冷气空调", text: "夏天制冷，冬天热泵也能制热，一机两用。" },
  { icon: BadgeCheck, title: "热泵安装", text: "-25°C 照常制热，安省补贴最高 $7,500。" },
  { icon: Wrench, title: "维修保养", text: "持牌师傅，报价透明，修不好不收费。" },
];

const steps = [
  { n: "1", title: "60 秒查补贴", text: "回答 4 个问题，马上知道你家符合哪档补贴。" },
  { n: "2", title: "免费上门评估", text: "师傅上门看房，量尺寸、算负荷，给书面报价。" },
  { n: "3", title: "安装 + 帮办补贴", text: "持牌安装，补贴申请材料我们全程帮你准备。" },
];

const faqs = [
  {
    q: "补贴是真的吗？",
    a: "真的。安省 Home Renovation Savings 现在就能申请，空气源热泵非天然气家庭最高 $7,500、天然气家庭 $2,000，不用验房。联邦的全国热泵补贴 2027 年 1 月开放申请，低收入家庭最高 $10,000，可以和省补贴叠加。",
  },
  {
    q: "热泵在多伦多冬天管用吗？",
    a: "管用。冷气候机型 -25°C 照常制热，极寒天自动切换备用热源。顺带夏天还能当空调，一机两用。",
  },
  {
    q: "2027 年才开放的联邦补贴，现在装是不是亏了？",
    a: "实话实说：联邦官方还没确认 2027 年之前的安装能不能追溯补领。如果你家炉子这个冬天就撑不住了，别等——先用安省现在的补贴装上；如果还能用，就先进早鸟名单，1 月开放第一时间申请。",
  },
  {
    q: "谁来我家安装？靠谱吗？",
    a: "都是持牌师傅（TSSA 认证），穿制服、带证件，装完打扫干净再走。中文沟通，全程无障碍。",
  },
  {
    q: "报价会不会有隐藏费用？",
    a: "不会。上门评估后给书面报价，写明设备、人工、补贴金额，签字前一分钱不多收。",
  },
];

export default function ZhLandingPage() {
  return (
    <main lang="zh-CN" className="pt-20">
      {/* Hero */}
      <header className="overflow-hidden bg-[var(--blue)] px-6 py-16 text-white lg:py-20">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,69,0,0.35)] bg-white/10 px-5 py-2.5 backdrop-blur-md">
              <ShieldCheck className="h-4 w-4 text-[var(--orange)]" />
              <span className="text-sm font-semibold tracking-[0.2em] text-white">持牌师傅 · 中文沟通</span>
            </div>
            <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[56px]">
              安省换热泵，最高能拿 <span className="text-[var(--orange)]">$7,500</span> 补贴
              <span className="mt-3 block text-2xl font-semibold text-slate-200 sm:text-3xl">我们帮你全程申请，一分钱不用多操心</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              WARMWISE 是 GTA 本地暖通公司。联邦补贴 2027 年 1 月开放，低收入家庭最高再加 $10,000——现在进早鸟名单，开放第一周就帮你申请。
            </p>
            <div className="flex flex-col gap-4 pt-6 sm:flex-row">
              <Link
                href="/rebate-check"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-[var(--orange)] px-8 py-4 text-lg font-semibold text-white shadow-[0_18px_40px_rgba(216,57,0,0.32)] transition hover:bg-[var(--orange-deep)]"
              >
                60秒查我能拿多少
                <ChevronRight className="h-5 w-5" />
              </Link>
              <Link
                href="/rebate-check"
                className="inline-flex items-center justify-center gap-3 rounded-lg border-2 border-white/25 px-8 py-4 text-lg font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                <BellRing className="h-5 w-5" />
                加入2027早鸟名单
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Dual track */}
      <section className="border-b border-[var(--border)] bg-[var(--surface-alt)] py-14">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 px-6 md:grid-cols-2">
          <div className="rounded-2xl bg-[var(--blue)] p-8 text-white">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--orange)]">现在就能拿</div>
            <div className="mt-3 text-4xl font-extrabold">最高 $7,500</div>
            <p className="mt-3 leading-7 text-slate-200">安省 Home Renovation Savings：空气源热泵，非天然气家庭最高 $7,500，天然气家庭 $2,000。不用验房。</p>
            <Link href="/rebate-check" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[var(--orange)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--orange-deep)]">
              查安省补贴资格 <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-2xl border-2 border-[var(--orange)] bg-white p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--orange)]">2027 年 1 月开放</div>
            <div className="mt-3 text-4xl font-extrabold text-[var(--blue)]">最高 $10,000</div>
            <p className="mt-3 leading-7 text-slate-600">联邦全国热泵补贴：低于省收入中位数的家庭最高 $10,000，其他人 $2,000，可和省补贴叠加。申请通道 2027 年 1 月开。</p>
            <Link href="/rebate-check" className="mt-6 inline-flex items-center gap-2 rounded-lg border-2 border-[var(--blue)] px-6 py-3 font-semibold text-[var(--blue)] transition hover:bg-slate-100">
              <BellRing className="h-4 w-4" /> 进联邦候补名单
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[var(--surface)] py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[var(--blue)] sm:text-4xl">我们做什么</h2>
          <p className="mb-12 max-w-2xl text-lg text-slate-600">暖气、冷气、热泵，GTA 华人家庭的冷暖问题，一个电话解决。</p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl border border-[var(--border)] bg-white p-7 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[rgba(216,57,0,0.1)]">
                  <s.icon className="h-6 w-6 text-[var(--orange)]" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[var(--blue)]">{s.title}</h3>
                <p className="text-sm leading-7 text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[var(--surface-container-low)] py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-[var(--blue)] sm:text-4xl">三步搞定</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="rounded-xl border border-[var(--border)] bg-white p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--blue)] text-xl font-extrabold text-white">{s.n}</div>
                <h3 className="mb-2 text-xl font-semibold text-[var(--blue)]">{s.title}</h3>
                <p className="text-sm leading-7 text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--surface)] py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-10 text-3xl font-bold tracking-tight text-[var(--blue)] sm:text-4xl">大家常问的</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border border-[var(--border)] bg-white p-6">
                <summary className="cursor-pointer text-lg font-semibold text-[var(--blue)]">{f.q}</summary>
                <p className="mt-3 leading-8 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[var(--blue)] px-6 py-16 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">先查一下，又不花钱</h2>
          <p className="mt-4 text-lg text-slate-200">60 秒知道你家能拿多少补贴。电话 <a href={site.phoneHref} className="font-semibold text-[var(--orange)]">{site.phone}</a>，中文直接聊。</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/rebate-check" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--orange)] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[var(--orange-deep)]">
              <CalendarCheck className="h-5 w-5" /> 60秒查我能拿多少
            </Link>
            <a href={site.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/25 px-8 py-4 text-lg font-semibold text-white transition hover:border-white hover:bg-white/10">
              <PhoneCall className="h-5 w-5" /> 直接打电话
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
