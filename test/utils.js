describe('Element-ID Generator', function() {
    var $bpmnUtils;
    beforeEach(module('angular-bpmn'));
    beforeEach(inject(function($injector) {
        $bpmnUtils = $injector.get('$bpmnUtils');
    }));

    it('should be defined', function() {
        expect($bpmnUtils).toBeDefined();
    });

    it('is faster than 10ms for each generated ID when generating 5000 IDs at once (they should not collide too often)', function() {
        var longCalls = 0;
        for(var i = 0; i<5000; i++) {
            var start = new Date().getTime();
            $bpmnUtils.newid();
            var end = new Date().getTime();
            var time = end - start;

            if(time.getMilliseconds() > 10) {
                longCalls++;
            }
        }
        expect(longCalls).toBe(0);
    });
});