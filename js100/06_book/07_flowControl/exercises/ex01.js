// What values do the following expressions evaluate to?

/* false */ false || (true && false);
/* true  */ true || (1 + 2);
/* 3     */ (1 + 2) || true;
/* 3     */ true && (1 + 2);
/* false */ false && (1 + 2);
/* true  */ (1 + 2) && true;
/* false */ (32 * 4) >= 129;
/* false */ false !== !true;
/* false */ true === 4;
/* true  */ false === (847 === '847');
/* false */ false === (847 == '847');
/* true  */ (!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;
/* x     */ (false || false || true) || false;