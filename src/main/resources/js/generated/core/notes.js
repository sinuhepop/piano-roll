class Notes {
    static asNumber(p) {
        return (p.octave - 4) * 12 + p.class;
    }
    static forNumber(n) {
        return new Pitch(Math.floor(n / 12 + 4), (n % 12 + 12) % 12);
    }
    static frequency(p) {
        return Math.pow(2, (Notes.asNumber(p) - 49) / 12) * 440;
    }
}
Notes.defaultVelocity = 0.5;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi90eXBlc2NyaXB0L2NvcmUvbm90ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFJSSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQVE7UUFDcEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUN6QyxDQUFDO0lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFTO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxNQUFNLENBQUMsU0FBUyxDQUFDLENBQVE7UUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDNUQsQ0FBQzs7QUFaZSxxQkFBZSxHQUFHLEdBQUcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImFic3RyYWN0IGNsYXNzIE5vdGVzIHtcblxuICAgIHN0YXRpYyByZWFkb25seSBkZWZhdWx0VmVsb2NpdHkgPSAwLjU7XG5cbiAgICBzdGF0aWMgYXNOdW1iZXIocDogUGl0Y2gpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKHAub2N0YXZlIC0gNCkgKiAxMiArIHAuY2xhc3M7XG4gICAgfVxuXG4gICAgc3RhdGljIGZvck51bWJlcihuOiBudW1iZXIpOiBQaXRjaCB7XG4gICAgICAgIHJldHVybiBuZXcgUGl0Y2goTWF0aC5mbG9vcihuIC8gMTIgKyA0KSwgKG4gJSAxMiArIDEyKSAlIDEyKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZnJlcXVlbmN5KHA6IFBpdGNoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnBvdygyLCAoTm90ZXMuYXNOdW1iZXIocCkgLSA0OSkgLyAxMikgKiA0NDA7XG4gICAgfVxuXG59XG4iXX0=