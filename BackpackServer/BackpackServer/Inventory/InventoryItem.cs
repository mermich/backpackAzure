using System;

namespace BackpackServer.Inventory {
    public record InventoryItem(int Id, string Name, string Description, bool InTheBag);
}
