---
slug: "/blog/react-props-update"
date: "2021-12-30"
title: "Update Properties ให้ Component อื่น แต่ไม่ Render ค่าใหม่"
blurb: "Update Properties ให้ Component อื่น แต่ไม่ Render ค่าใหม่"
featuredImage: "./react-props-update.png"
---
# Problem
```
function App() {
  const [listA, setListA] = useState([1,2,3,4,5])

  return (
    <Component1 data={listA}>
  )
}
```
เมื่อมีการเพิ่มข้อมูลใน `listA` ด้วย `.push()`
```
listA.push(6)
```
แล้วทำการ update state
```
setListA(listA)
```
`Component1` ก็ไม่ได้รับค่าใหม่

# Cause
`listA` เก็บค่าของ Address ของ array ไว้ (Pointer หรือ Reference) การแก้ไขค่าของ array ผ่าน `.push` ไม่ได้ทำให้ตำแหน่งที่อยู่ของ array เปลี่ยนไป ดังนั้น listA จึงมีค่าเดิม และเมื่อทำการ update state จึงไม่มีอะไรเปลี่ยนแปลง

# Solution
วิธีการ update state ที่เป็น Object หรือ Array ให้สร้าง Object หรือ Array ใหม่ ดังตัวอย่าง
```
setListA([...listA, 6])
```
ทำการ destructure listA ด้วย ... และ เพิ่มค่าใหม่ (6) เข้าไป