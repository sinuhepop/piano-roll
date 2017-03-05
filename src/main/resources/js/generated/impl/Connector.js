class Connector {
    constructor() {
        this.inputs = [];
        this.outputs = [];
    }
    addInput(i) {
        this.inputs.push(i);
        i.onSend = (m) => {
            this.outputs.forEach(o => {
                if (o.id != i.id) {
                    o.receive(m);
                }
            });
        };
    }
    addOutput(o) {
        this.outputs.push(o);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdHlwZXNjcmlwdC9pbXBsL0Nvbm5lY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUFBO1FBRXVCLFdBQU0sR0FBWSxFQUFFLENBQUM7UUFDckIsWUFBTyxHQUFhLEVBQUUsQ0FBQztJQWlCOUMsQ0FBQztJQWZHLFFBQVEsQ0FBQyxDQUFRO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQVU7WUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDZixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUE7SUFDTCxDQUFDO0lBRUQsU0FBUyxDQUFDLENBQVM7UUFDZixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QixDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDb25uZWN0b3Ige1xuXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGlucHV0czogSW5wdXRbXSA9IFtdO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBvdXRwdXRzOiBPdXRwdXRbXSA9IFtdO1xuXG4gICAgYWRkSW5wdXQoaTogSW5wdXQpIHtcbiAgICAgICAgdGhpcy5pbnB1dHMucHVzaChpKTtcbiAgICAgICAgaS5vblNlbmQgPSAobTogTWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vdXRwdXRzLmZvckVhY2gobyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG8uaWQgIT0gaS5pZCkge1xuICAgICAgICAgICAgICAgICAgICBvLnJlY2VpdmUobSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRPdXRwdXQobzogT3V0cHV0KSB7XG4gICAgICAgIHRoaXMub3V0cHV0cy5wdXNoKG8pO1xuICAgIH1cblxufSJdfQ==