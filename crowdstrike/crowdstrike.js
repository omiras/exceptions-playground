let DDBB = [
    {
        "id": "virus_001",
        "name": "Trojan.Win32.Generic",
        "threatLevel": "High",
        "detectionDate": "2024-07-20",
        "description": "A generic trojan that steals personal information from infected systems."
    },
    {
        "id": "virus_002",
        "name": "Ransomware.WannaCry",
        "threatLevel": "Critical",
        "detectionDate": "2024-06-15",
        "description": "Ransomware that encrypts user files and demands a ransom for decryption."
    },
    {
        "id": "virus_003",
        "name": "Adware.Generic.A",
        "threatLevel": "Medium",
        "detectionDate": "2024-07-10",
        "description": "An adware program that displays unwanted ads and redirects web traffic."
    },
    {
        "id": "virus_004",
        "name": "Spyware.Agent.B",
        "threatLevel": "High",
        "detectionDate": "2024-07-22",
        "descriptio": "A spyware agent that monitors user activities and transmits data to remote servers."
    },
    {
        "id": "virus_005",
        "name": "Worm.Win32.AutoRun",
        "threatLevel": "Low",
        "detectionDate": "2024-07-18",
        "description": "A worm that spreads through removable drives using autorun.inf files."
    }
];

var valorGlobalNecesario;
const crowdStrike = {
    updateAntivirus: function () {
        let antivirusDateBase = DDBB;

        // mis cositas
        valorGlobalNecesario = "v1.0";

        // Hago "cosas"
        let newDefinition = DDBB[3].description.toLocaleUpperCase();
    }
}