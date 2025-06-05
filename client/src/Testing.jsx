import { useEffect } from "react"
import { useState } from "react"

export default function Testing () {
      const [src, setSrc] = useState();

  useEffect(() => {
    fetch("http://localhost:1000/blog")
      .then((res) => res.blob())
      .then((res => {
        const url = URL.createObjectURL(res);
        setSrc(url)
      }))
  }, []);

  return (
    <>
      <p>This is test</p>
      {src && <img src={src} alt="Fetched" />}
    </>
  );
}