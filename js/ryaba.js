const startPoint = {
	"text":[
	"Жили-были {var1} да {var2} ",
	"Была у них {var3}",
	"Снесла {var3} {var4}, не простое - золотое",
	"- {var1} бил, бил - не разбил",
	"- {var2} била, била - не разбила",
	"{var5} бежала, {var6} задела,	{var4} упало и разбилось.	", "{var1} плачет, {var2} плачет, а {var3} кудахчет:	",	"{speach}"]
};

const btnCreate = $('.btn-primary');
const btnEdit = $('.btn-secondary');
const textNode = $('#result');

const var1Node = $("input[name=var1]");
const var2Node = $("input[name=var2]");
const var3Node = $("input[name=var3]");
const var4Node = $("input[name=var4]");
const var5Node = $("input[name=var5]");
const var6Node = $("input[name=var6]");
const speachNode = $("input[name=speach]");


btnCreate.click(function() {
	textNode.html(startPoint.text);
});

btnEdit.click(function() {
const var1 = var1Node.val();
const var2 = var2Node.val();
const var3 = var3Node.val();
const var4 = var4Node.val();
const var5 = var5Node.val();
const var6 = var6Node.val();
const speach = speachNode.val();
const endPoint = {
	"text":[
	`Жили-были ${var1} да ${var2} `,
	`Была у них ${var3}`, 
	`Снесла ${var3} ${var4}, не простое - золотое`,
	`- ${var1} бил, бил - не разбил`,
	`- ${var2} била, била - не разбила`,
	`${var5} бежала, ${var6} задела,	
	${var4} упало и разбилось.	`, `${var1} плачет,
	 ${var2} плачет, а ${var3} кудахчет:
	 	`,	`${speach}`]
};
textNode.html(endPoint.text);
});




