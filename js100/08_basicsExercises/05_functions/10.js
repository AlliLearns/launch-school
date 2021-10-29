// Similar to the last exercise, extract the region code.

console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'

function extractRegion(locale) {
    return locale.split('_')[1].split('.')[0];
}