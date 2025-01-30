export default function Home() {
    return (
        <div className="w-screen h-screen flex justify-center bg-gray-100">
            <object
                data="/hitbosss.pdf"
                type="application/pdf"
                className="w-full h-full"
                style={{ minHeight: "100vh" }}
            >
                <p>Tu navegador no soporta la visualización de PDFs. <a href="/hitbosss.pdf">Descargar PDF</a></p>
            </object>
        </div>
    );
}