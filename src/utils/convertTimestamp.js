
const convertTimestamp = (timestamp, toUse) => {
    
    if (toUse === "chart") {
        // Convert to milliseconds  
        const milliseconds = new Date(timestamp * 1000)
        return milliseconds.toLocaleString('en-US',
            { hour: '2-digit', minute: '2-digit', hour12: false })
    }
    else if (toUse === "news") {
        return calculateTimeDifference(timestamp)
    }
}

const calculateTimeDifference = (publicationNewsTime) => {
    // change to milliseconds
    const currentTime = Math.floor(new Date() / 1000)

    const timeDifference = currentTime - publicationNewsTime

    const seconds = timeDifference % 60;
    const minutes = Math.floor((timeDifference / 60) % 60);
    const hours = Math.floor((timeDifference / 3600) % 24);
    const days = Math.floor(timeDifference / 86400);

    if(days > 0) {
        return `${days} days ago`
    }
    else if (hours > 0) {
        return `${hours} hours ago`
    }
    else if (minutes > 0) {
        return `${minutes} mins ago`
    }

    return `${seconds} seconds ago`
}

export default convertTimestamp