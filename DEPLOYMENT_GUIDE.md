# Vercel + 커스텀 도메인 + Cloudflare R2 영상 서빙 가이드

## 1. Vercel에 커스텀 도메인 연결

### Vercel 대시보드
1. 프로젝트 → **Settings** → **Domains**
2. 구매한 도메인 입력 (예: `dodream.com`)
3. Vercel이 DNS 레코드를 알려줌

### 도메인 구매처(가비아, 카페24 등) DNS 설정

| 타입 | 이름 | 값 |
|------|------|----|
| A | @ | `76.76.21.21` |
| CNAME | www | `cname.vercel-dns.com` |

> 설정 후 몇 분 ~ 최대 48시간 내 적용

---

## 2. Cloudflare R2 셋업 (영상 저장소)

### R2를 사용하는 이유
- 2~3GB 영상을 GitHub에 올릴 수 없음 (100MB 제한)
- YouTube 임베드는 플레이어 UI 커스터마이징 불가
- R2는 저장 10GB 무료, **다운로드(egress) 비용 무료** → 트래픽 걱정 없음
- `<video>` 태그로 100% UI 커스터마이징 가능

### 셋업 순서
1. [Cloudflare 가입](https://dash.cloudflare.com) (무료)
2. 좌측 메뉴 → **R2 Object Storage** → **Create bucket**
3. 버킷 생성 → **Settings** → **Public access** 허용
4. 영상 파일 업로드 (대시보드에서 드래그앤드롭 가능)
5. 공개 URL 복사 (예: `https://pub-abc123.r2.dev/video.mp4`)

---

## 3. 코드에서 사용

```tsx
<video
  src="https://pub-abc123.r2.dev/intro.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-full object-cover"
/>
```

---

## 전체 구조

```
dodream.com (커스텀 도메인)
  └── Vercel (프로젝트 배포)
        └── <video src="R2 URL"> (영상은 R2에서 로드)
```

- **Vercel**: 프로젝트 배포 + 도메인 연결
- **Cloudflare R2**: 영상 저장소 (별도 독립)
- 서로 독립적이라 각각 설정하면 끝
