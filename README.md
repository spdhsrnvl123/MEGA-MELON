# π MEGA MELON

![mega-melon](https://user-images.githubusercontent.com/83896466/221178757-74624da2-72cd-4a87-831c-2b04a36a83bf.gif)


## πλ°°ν¬
https://spdhsrnvl123.github.io/MEGA-MELON/


## πͺ νλ‘μ νΈ μ€ν λ°©λ²
1. git cloneνμ¬ νλ‘μ νΈλ₯Ό λ΄λ €λ°μ΅λλ€.
    ```bash
    git clone https://github.com/spdhsrnvl123/MEGA-MELON.git
    ```
2. ν¨ν€μ§λ₯Ό μ€μΉν©λλ€.
    ```bash
    npm install
    ```
3. νλ‘μ νΈλ₯Ό μ€νν©λλ€.
    ```bash
    npm start
    ```


## π§° κΈ°μ  μ€ν λ° κ΅¬ν μ¬ν­
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=black"> <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled components&logoColor=black">
### π μ¬μ© λΌμ΄λΈλ¬λ¦¬ λ²μ  μ λ³΄
- react 18.2.0
- styled-components 5.3.6
- redux 8.0.5
- redux-toolkit 1.9.2

### κ΅¬ν μ¬ν­

### π¨λΌμ΄λΈλ¬λ¦¬λ₯Ό νμ©ν κ΅¬ν μ¬ν­
- `Redux-toolkit`μ thunkλ₯Ό μ΄μ©νμ¬ λΉλκΈ° λ°μ΄ν° ν΅μ μ κ΅¬ννμμ΅λλ€.
- `Redux-toolkit`μ μ΄μ©νμ¬ μνκ΄λ¦¬λ₯Ό κ΅¬ννμμ΅λλ€.
- `styled-components`λ₯Ό μ΄μ©νμ¬ κ°λ³ CSSνμΌμ λ§λ€μ§ μκ³  νλμ μ»΄ν¬λνΈλ€λ‘ κ΅¬μ±νμμ΅λλ€.
- `styled-components`μ λ΄μ₯ APIμΈ createGlobalStyleμ μ΄μ©νμ¬ μ μ­ μ€νμΌλ§μ νμμ΅λλ€.

## π λλ ν λ¦¬ κ΅¬μ‘°
```
src
 βββ components      
 |       βββ base
 |       |     βββ Button
 |       |     |      βββ index.jsx
 |       |     βββ Input
 |       |     |      βββ index.jsx
 |       |     βββ SearchCount
 |       |            βββ index.jsx
 |       βββ domain
 |              βββ Card
 |              |     βββ index.jsx
 |              βββ Footer
 |              |     βββ index.jsx
 |              βββ Header
 |              |     βββ index.jsx
 |              βββ Main
 |              |     βββ index.jsx
 |              βββ Nav
 |                    βββ index.jsx
 βββ  redux
 |      βββ card   
 |      |     βββ index.jsx
 |      βββ count  
 |      |     βββ index.jsx 
 |      βββ search  
 |      |     βββ index.jsx  
 |      βββ store.jsx
 |
 βββ  styles
        βββ GlobalStyle.jsx
```

## βοΈ μ£Όμ μ»΄ν¬λνΈ κΈ°λ₯ μ¬ν­
### πcard μ»΄ν¬λνΈ
- `thunk`λ₯Ό μ΄μ©ν λΉλκΈ° λ°μ΄ν° ν΅μ  μ»΄ν¬λνΈ μλλ€.
- `extraReducers`λ₯Ό μ΄μ©νμ¬ state μνμ λ°λ₯Έ λ‘μ§μ λ§λ€μ΄ μ£Όμμ΅λλ€.
- `sort()`λ©μλλ₯Ό μ΄μ©νμ¬ λ°μ΄ν° κ°μ λ±λ‘μΌ(createdAt) μ΅μ μμΌλ‘ μ λ ¬ν΄ μ£Όμμ΅λλ€.

### π count μ»΄ν¬λνΈ
- κ²μ κ²°κ³Ό(μ«μ)μ state κ°μ μ μ₯νλ μ»΄ν¬λνΈ μλλ€.

### π search μ»΄ν¬λνΈ
- κ²μμ΄ state κ°μ μ μ₯νλ μ»΄ν¬λνΈ μλλ€.

### π Main μ»΄ν¬λνΈ
- λ°μ΄ν° ν΅μ μ΄ μ€ν¨νμ κ²½μ° Main μ»΄ν¬λνΈμμ ListJob μ€νμΌ μ»΄ν¬λνΈ μ(card μ»΄ν¬λνΈ λ°λ³΅λ¬Έ)μ μΌν­ μ°μ°μλ‘ μ€λ₯μ λν μμΈ μ²λ¦¬λ₯Ό λ§λ€μ΄ μ£Όμμ΅λλ€.
- `updateData()`ν¨μλ ν cardDataμ stateκ°μ filterμ μ‘°κ±΄λ¬Έμ μ΄μ©νμ¬ μλ ₯μ°½μ μλ ₯λ νμ΄ν λλ ν€μλμ λ§λ stateκ°μ λ¦¬ν΄νλ ν¨μμλλ€. ν΄λΉ ν¨μκ° λ°°μ΄μ λ¦¬ν΄νκΈ° λλ¬Έμ map() λ©μλλ₯Ό μ΄μ©νμ¬ κ²μμ΄ μλ ₯ μ¦μ νν°λ§(Cardμ»΄ν¬λνΈ) λλλ‘ κ΅¬ννμμ΅λλ€.

### π Card μ»΄ν¬λνΈ
- `getDate()`ν¨μλ μ€λ λ μ§ κΈ°μ€μΌλ‘ λ°μμ¨ λ°μ΄ν°μ λ±λ‘μΌ(createdAt)μ μ°¨μ΄λ₯Ό κ΅¬νλ ν¨μμλλ€.
- `resentData()`ν¨μλ getDate()ν¨μμμ λ°νλ κ°μ λ°λΌ λΉμΌμΌ κ²½μ° 'Today', 2μΌ λ΄ λ°μ΄ν° '${diff} days ago' κ·Έ μΈμ λ°μ΄ν°λ 'YYYY.MM.DD' ν¬λ§·μΌλ‘ λ°ννλλ‘ μ‘°κ±΄μμ λ§λ€μ΄ μ£Όμμ΅λλ€.
- styled-componentsμ propsμ κΈ°λ₯μΌλ‘ getDate()ν¨μ λ°νκ°μ λ°λΌ List μ€νμΌ μ»΄ν¬λνΈμ μΌν­μ°μ°μλ₯Ό λ§λ€μ΄ μ‘°κ±΄μ λ§λ propsλ₯Ό μ λ¬ν΄ μ£Όμ΄μ opactiy '0' λλ '1'λ‘ New λ°μ΄ν°λ₯Ό νμνμμ΅λλ€.

### π Input μ»΄ν¬λνΈ
- onChange νμ©νμ¬ input κ°μ΄ λ³κ²½λ  λλ§λ€ Redux λ³κ²½ν¨μμ κ°μ λ£μ΄μ€ stateκ°μ μλ°μ΄νΈ νμμ΅λλ€.
