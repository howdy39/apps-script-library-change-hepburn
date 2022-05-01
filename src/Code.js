// eslint-disable-next-line
function test() {
  const checkList = [
    { source: 'みそのお', dest: 'misonoo' },
    { source: 'たかとお', dest: 'takatoo' },
    { source: 'たかとう', dest: 'takato' },
    { source: 'おおの', dest: 'ono' },
    { source: 'おおおか', dest: 'ooka' },
    { source: 'いのうえ', dest: 'inoue' },
    { source: 'こおり', dest: 'kori' },
    { source: 'みそのう', dest: 'misono' },
    { source: 'さとう', dest: 'sato' },
    { source: 'ゆうか', dest: 'yuka' },
    { source: 'まつうら', dest: 'matsuura' },
    { source: 'こうちわ', dest: 'kouchiwa' },
    { source: 'かんだ', dest: 'kanda' },
    { source: 'しんや', dest: 'shinya' },
    { source: 'じゅん', dest: 'jun' },
    { source: 'なんば', dest: 'namba' },
    { source: 'ほんま', dest: 'homma' },
    { source: 'さんぺい', dest: 'sampei' },
    { source: 'はっとり', dest: 'hattori' },
    { source: 'きっかわ', dest: 'kikkawa' },
    { source: 'てっぺい', dest: 'teppei' },
    { source: 'ほっち', dest: 'hotchi' },
    { source: 'はっちょう', dest: 'hatcho' }
  ];
  checkList.forEach(check => {
    const { source, dest } = check;
    const result = kanaToHepburn(source);
    if (result === dest) {
      console.log('OK', source, dest);
    } else {
      console.error('NG', source, dest, result);
    }
  });
}

function kanaToHepburn(source) {
  let map = {
    あ: 'a',
    い: 'i',
    う: 'u',
    え: 'e',
    お: 'o',
    か: 'ka',
    き: 'ki',
    く: 'ku',
    け: 'ke',
    こ: 'ko',
    さ: 'sa',
    し: 'shi',
    す: 'su',
    せ: 'se',
    そ: 'so',
    た: 'ta',
    ち: 'chi',
    つ: 'tsu',
    て: 'te',
    と: 'to',
    な: 'na',
    に: 'ni',
    ぬ: 'nu',
    ね: 'ne',
    の: 'no',
    は: 'ha',
    ひ: 'hi',
    ふ: 'fu',
    へ: 'he',
    ほ: 'ho',
    ま: 'ma',
    み: 'mi',
    む: 'mu',
    め: 'me',
    も: 'mo',
    や: 'ya',
    ゆ: 'yu',
    よ: 'yo',
    ら: 'ra',
    り: 'ri',
    る: 'ru',
    れ: 're',
    ろ: 'ro',
    わ: 'wa',
    ゐ: 'i',
    ゑ: 'e',
    を: 'o',
    ん: 'n',
    ぁ: 'a',
    ぃ: 'i',
    ぅ: 'u',
    ぇ: 'e',
    ぉ: 'o',
    が: 'ga',
    ぎ: 'gi',
    ぐ: 'gu',
    げ: 'ge',
    ご: 'go',
    ざ: 'za',
    じ: 'ji',
    ず: 'zu',
    ぜ: 'ze',
    ぞ: 'zo',
    だ: 'da',
    ぢ: 'ji',
    づ: 'zu',
    で: 'de',
    ど: 'do',
    ば: 'ba',
    び: 'bi',
    ぶ: 'bu',
    べ: 'be',
    ぼ: 'bo',
    ぱ: 'pa',
    ぴ: 'pi',
    ぷ: 'pu',
    ぺ: 'pe',
    ぽ: 'po',
    きゃ: 'kya',
    きゅ: 'kyu',
    きょ: 'kyo',
    しゃ: 'sha',
    しゅ: 'shu',
    しょ: 'sho',
    ちゃ: 'cha',
    ちゅ: 'chu',
    ちょ: 'cho',
    ちぇ: 'che',
    にゃ: 'nya',
    にゅ: 'nyu',
    にょ: 'nyo',
    ひゃ: 'hya',
    ひゅ: 'hyu',
    ひょ: 'hyo',
    みゃ: 'mya',
    みゅ: 'myu',
    みょ: 'myo',
    りゃ: 'rya',
    りゅ: 'ryu',
    りょ: 'ryo',
    ぎゃ: 'gya',
    ぎゅ: 'gyu',
    ぎょ: 'gyo',
    じゃ: 'ja',
    じゅ: 'ju',
    じょ: 'jo',
    びゃ: 'bya',
    びゅ: 'byu',
    びょ: 'byo',
    ぴゃ: 'pya',
    ぴゅ: 'pyu',
    ぴょ: 'pyo',
    ア: 'a',
    イ: 'i',
    ウ: 'u',
    エ: 'e',
    オ: 'o',
    カ: 'ka',
    キ: 'ki',
    ク: 'ku',
    ケ: 'ke',
    コ: 'ko',
    サ: 'sa',
    シ: 'shi',
    ス: 'su',
    セ: 'se',
    ソ: 'so',
    タ: 'ta',
    チ: 'chi',
    ツ: 'tsu',
    テ: 'te',
    ト: 'to',
    ナ: 'na',
    ニ: 'ni',
    ヌ: 'nu',
    ネ: 'ne',
    ノ: 'no',
    ハ: 'ha',
    ヒ: 'hi',
    フ: 'fu',
    ヘ: 'he',
    ホ: 'ho',
    マ: 'ma',
    ミ: 'mi',
    ム: 'mu',
    メ: 'me',
    モ: 'mo',
    ヤ: 'ya',
    ユ: 'yu',
    ヨ: 'yo',
    ラ: 'ra',
    リ: 'ri',
    ル: 'ru',
    レ: 're',
    ロ: 'ro',
    ワ: 'wa',
    ヰ: 'i',
    ヱ: 'e',
    ヲ: 'o',
    ン: 'n',
    ァ: 'a',
    ィ: 'i',
    ゥ: 'u',
    ェ: 'e',
    ォ: 'o',
    ガ: 'ga',
    ギ: 'gi',
    グ: 'gu',
    ゲ: 'ge',
    ゴ: 'go',
    ザ: 'za',
    ジ: 'ji',
    ズ: 'zu',
    ゼ: 'ze',
    ゾ: 'zo',
    ダ: 'da',
    ヂ: 'ji',
    ヅ: 'zu',
    デ: 'de',
    ド: 'do',
    バ: 'ba',
    ビ: 'bi',
    ブ: 'bu',
    ベ: 'be',
    ボ: 'bo',
    パ: 'pa',
    ピ: 'pi',
    プ: 'pu',
    ペ: 'pe',
    ポ: 'po',
    キャ: 'kya',
    キュ: 'kyu',
    キョ: 'kyo',
    シャ: 'sha',
    シュ: 'shu',
    ショ: 'sho',
    チャ: 'cha',
    チュ: 'chu',
    チョ: 'cho',
    ニャ: 'nya',
    ニュ: 'nyu',
    ニョ: 'nyo',
    ヒャ: 'hya',
    ヒュ: 'hyu',
    ヒョ: 'hyo',
    ミャ: 'mya',
    ミュ: 'myu',
    ミョ: 'myo',
    リャ: 'rya',
    リュ: 'ryu',
    リョ: 'ryo',
    ギャ: 'gya',
    ギュ: 'gyu',
    ギョ: 'gyo',
    ジャ: 'ja',
    ジュ: 'ju',
    ジョ: 'jo',
    ビャ: 'bya',
    ビュ: 'byu',
    ビョ: 'byo',
    ピャ: 'pya',
    ピュ: 'pyu',
    ピョ: 'pyo',
    ジェ: 'jie',
    チェ: 'chie',
    ティ: 'tei',
    ディ: 'dei',
    デュ: 'deyu',
    ファ: 'fua',
    フィ: 'fui',
    フェ: 'fue',
    フォ: 'fuo',
    ヴァ: 'bua',
    ヴィ: 'bui',
    ヴ: 'bu',
    ヴェ: 'bue',
    ヴォ: 'buo',
    ー: ''
  };
  let temp = '';
  let temp2 = '';
  let temp3 = '';
  let temp4 = '';
  //   let temp5 = '';
  let temp6 = '';
  let roma = '';
  let result = '';
  for (let i = 0; i < source.length; i = i + 1) {
    temp = source.substring(i, i + 1);
    temp2 = source.substring(i, i + 2);
    if (map[temp2] === undefined) {
      if (map[temp] === undefined) {
        roma = roma + temp;
      } else {
        roma = roma + map[temp];
      }
    } else {
      i = i + 1;
      roma = roma + map[temp2];
    }
  }
  for (let i = 0; i < roma.length; i = i + 1) {
    temp = roma.substring(i, i + 1);
    temp2 = roma.substring(i, i + 2);
    temp3 = roma.substring(i, i + 3);
    temp4 = roma.substring(i, i + 4);
    // temp5 = roma.substring(i, i + 5);
    temp6 = roma.substring(i, i + 6);
    let sub_str2 = temp2.substring(1, 2);
    if (temp4 == 'noue') {
      // console.log('いのうえ対策');
      i = i + 3;
      temp = 'noue';
    } else if (temp6 == 'touchi') {
      i = i + 5;
      temp = 'touchi';
    } else if (temp4 == 'tsuu') {
      // console.log('tsuuは伸ばしじゃないため変換せず（まつうら）', temp4);
      i = i + 3;
      temp = 'tsuu';
    } else if (temp3 == 'kou') {
      // console.log('kouは伸ばしじゃないため変換せず（こうちわ）', temp3);
      temp = 'kou';
      i = i + 2;
    } else {
      if (temp2 == 'oo') {
        if (i === roma.length - 2) {
          // console.log('最後ooは伸ばしじゃないため変換せず（たかとお）', temp2);
        } else {
          i = i + 1;
        }
      } else if (temp2 == 'uu' || temp2 == 'ee' || temp2 == 'ou') {
        i = i + 1;
      } else if (temp2 == 'nb' || temp2 == 'nm' || temp2 == 'np') {
        temp = 'm';
      } else if (temp == 'っ' || temp == 'ッ') {
        if (temp3 == 'っch' || temp3 == 'ッch') {
          temp = 't';
        } else if (sub_str2.match(/[a-z]/gi)) {
          temp = sub_str2;
        } else {
          temp = 'tsu';
        }
      }
    }
    result = result + temp;
  }
  return result;
}
