const englishNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const latinNames = ['Do', 'Do#', 'Re', 'Re#', 'Mi', 'Fa', 'Fa#', 'Sol', 'Sol#', 'La', 'La#', 'Si'];
const diatonics = [0, 2, 4, 5, 7, 9, 11];
/*
enum Accidental {
    Natural, Sharp, Flat
}

enum DurationType {
    Real, Sheet
}
*/
class Pitch {
    constructor(octave, clss) {
        this.octave = octave;
        this.class = clss;
    }
    toString() {
        return englishNames[this.class] + this.octave;
    }
    isDiatonic() {
        return diatonics.indexOf(this.class) > -1;
    }
    static fromString(s) {
        var octave = parseInt(s.substring(s.length - 1));
        var clss = englishNames.indexOf(s.substring(0, s.length - 1));
        return new Pitch(octave, clss);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi90eXBlc2NyaXB0L2NvcmUvdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxZQUFZLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZGLE1BQU0sVUFBVSxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNuRyxNQUFNLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBRXpDOzs7Ozs7OztFQVFFO0FBRUY7SUFLSSxZQUFZLE1BQWMsRUFBRSxJQUFZO1FBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxRQUFRO1FBQ0osTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNsRCxDQUFDO0lBRUQsVUFBVTtRQUNOLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0lBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFTO1FBQ3ZCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxJQUFJLElBQUksR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RCxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVuZ2xpc2hOYW1lcyA9IFsnQycsICdDIycsICdEJywgJ0QjJywgJ0UnLCAnRicsICdGIycsICdHJywgJ0cjJywgJ0EnLCAnQSMnLCAnQiddO1xuY29uc3QgbGF0aW5OYW1lcyA9IFsnRG8nLCAnRG8jJywgJ1JlJywgJ1JlIycsICdNaScsICdGYScsICdGYSMnLCAnU29sJywgJ1NvbCMnLCAnTGEnLCAnTGEjJywgJ1NpJ107XG5jb25zdCBkaWF0b25pY3MgPSBbMCwgMiwgNCwgNSwgNywgOSwgMTFdO1xuXG4vKlxuZW51bSBBY2NpZGVudGFsIHtcbiAgICBOYXR1cmFsLCBTaGFycCwgRmxhdFxufVxuXG5lbnVtIER1cmF0aW9uVHlwZSB7XG4gICAgUmVhbCwgU2hlZXRcbn1cbiovXG5cbmNsYXNzIFBpdGNoIHtcblxuICAgIHJlYWRvbmx5IG9jdGF2ZTogbnVtYmVyO1xuICAgIHJlYWRvbmx5IGNsYXNzOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihvY3RhdmU6IG51bWJlciwgY2xzczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMub2N0YXZlID0gb2N0YXZlO1xuICAgICAgICB0aGlzLmNsYXNzID0gY2xzcztcbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGVuZ2xpc2hOYW1lc1t0aGlzLmNsYXNzXSArIHRoaXMub2N0YXZlO1xuICAgIH1cblxuICAgIGlzRGlhdG9uaWMoKSB7XG4gICAgICAgIHJldHVybiBkaWF0b25pY3MuaW5kZXhPZih0aGlzLmNsYXNzKSA+IC0xXG4gICAgfVxuXG4gICAgc3RhdGljIGZyb21TdHJpbmcoczogc3RyaW5nKSB7XG4gICAgICAgIHZhciBvY3RhdmUgPSBwYXJzZUludChzLnN1YnN0cmluZyhzLmxlbmd0aCAtIDEpKTtcbiAgICAgICAgdmFyIGNsc3MgPSBlbmdsaXNoTmFtZXMuaW5kZXhPZihzLnN1YnN0cmluZygwLCBzLmxlbmd0aCAtIDEpKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQaXRjaChvY3RhdmUsIGNsc3MpO1xuICAgIH1cbn1cblxuLypcbmNsYXNzIE5vdGUge1xuICAgIHBpdGNoOiBQaXRjaDtcbiAgICB2ZWxvY2l0eTogbnVtYmVyO1xuICAgIGR1cmF0aW9uOiBudW1iZXIgfCBudWxsO1xufVxuKi9cblxudHlwZSBTaXplID0geyB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciB9O1xuIl19