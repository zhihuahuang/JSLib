/*
 * 计算两个字符串的编辑距离
 *
 * @param str1 字符串1
 * @param str2 字符串2
 *
 * @return 字符串的编辑距离
 */
String.distance = function (str1, str2) {

    var edit = (function f(i, j) {
        var result;
        if (i == 0 || j == 0) {
            result = i + j;
        } else if (table[i - 1][j - 1] >= 0) {
            result = table[i - 1][j - 1];
        } else {
            result = table[i - 1][j - 1] = Math.min(f(i - 1, j) + 1, f(i, j - 1) + 1, f(i - 1, j - 1) + +(str1.charAt(i - 1) != str2.charAt(j - 1)));
        }
        return result;
    });

    var table = [];
    for (var i = 0; i < str1.length; ++i) {
        table.push(new Array(str2.length));
    }

    return edit(str1.length, str2.length);

}

console.log(String.distance('第一百一十二章戴着面具做人', '第一百一十三章带着面具做人'));