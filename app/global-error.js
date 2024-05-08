'use client'
import Link from "next/link"

const globalError = ({reset}) => {
  return (
    <html>
        <body>
            <main>
                <div>
                    <h2>Algo no salio bien</h2>
                    <Link
                    href="/">
                        Volver al inicio
                    </Link>
                    <button onClick={() => reset()}>Recargar</button>
                </div>
            </main>
        </body>
    </html>
  )
}

export default globalError