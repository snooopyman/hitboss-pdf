/*export default function Home() {
    return (
        <div>
            <object id="pdf" height="100%" width="100%" type="application/pdf" data="/hitbosss.pdf">
                <p>Tu navegador no soporta archivos PDF.</p>
            </object>
        </div>
    );
}
 */
import { useEffect, useState } from 'react';

export default function Home() {
    const [pdfUrl, setPdfUrl] = useState(null);

    useEffect(() => {
        // Cargar el archivo PDF desde la carpeta public
        fetch('/hitbosss.pdf')
            .then((response) => response.blob())
            .then((blob) => {
                const url = URL.createObjectURL(blob);
                setPdfUrl(url);
            })
            .catch((error) => console.error('Error al cargar el PDF:', error));

        // Limpiar el objectURL cuando el componente se desmonte
        return () => {
            if (pdfUrl) {
                URL.revokeObjectURL(pdfUrl);
            }
        };
    }, []);

    return (
        <div>
            {pdfUrl ? (
                <object id="pdf" height="100%" width="100%" type="application/pdf" data={pdfUrl}>
                    <p>Tu navegador no soporta archivos PDF.</p>
                </object>
            ) : (
                <p>Cargando PDF...</p>
            )}
        </div>
    );
}


