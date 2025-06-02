# movieReview

## 협업 시 준비 과정 

### 1. 리포지토리 클론
   
```
git clone <원격 저장소 주소>
```

### 2. git flow 설치 및 초기화

```
git flow init
```

## 협업 시작 바로 전 과정 

### 1. 원격 브랜치 최신화 (필수)

패치 후 풀

```
git fetch
git pull origin develop
```

### 2. 기능 개발 시작

브랜치 이름 규칙 

- 예시:
    - `feature/user-login`
    - `bugfix/api-timeout`
    - `hotfix/login-crash`
    - `refactor/header-component`
      
```
git flow feature start <기능명>
git flow feature finish <기능명>
git push origin develop
```

### 3. feature에서 작업을 마친 뒤 develop브랜치로 병합 







