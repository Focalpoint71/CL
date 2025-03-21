document.getElementById("saveContact").addEventListener("click", function () {
    let vCardData = `BEGIN:VCARD
VERSION:3.0
FN: Cherry Land
TEL:+959*********
EMAIL: slbelectronic25@gmail.com
ADR:;; Taunggyi;Myanmar
URL: https://t.me/Saung74
END:VCARD`;

    let blob = new Blob([vCardData], { type: "text/vcard" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "contact.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
