function binarySearch(sortedArr, item) {
    let currentIndex = Math.floor(sortedArr.length / 2);
    let currentSliceLength = currentIndex / 2;

    while (currentIndex < sortedArr.length) {
        if (sortedArr[currentIndex] === item) {
            return currentIndex;
        }

        if (sortedArr[currentIndex] > item) {
            currentIndex = currentIndex - currentSliceLength;
        } else {
            currentIndex = currentIndex + currentSliceLength;
        }
        currentSliceLength = Math.ceil(currentSliceLength / 2);
    }
}