
<script>
var add1 = function (x) {
    return x + 1;
};


var negate = function(func) {
    var negator = function(value) {
        return func(value) * -1;  
    };
    return negator;
};


// Should return -6
// Because (5+1) * -1 = -6
negate(add1)(5);

</script>
