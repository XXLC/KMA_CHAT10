ehaviorProcessor:AddBuff(BuffInstance, Int32, Boolean, Boolean)
Player:OnBuffChange(BuffInstance, EBuffChangeType, Boolean, Boolean)
BaseInfo:AddBuff(BuffInstance, Boolean, Boolean)
Player:SyncBuffInfo(IList`1)
Modules.MMO.BuffAndCDModel:<MsgEvents>m__2(Int32, IMessage)
Net.NetConnectionHelper:DispatchMsg(Int32, IMessage, LuaProtobufBytes)
Net.NetConnectionHelper:ProcessQueueMessage(MessageData)
Net.NetConnectionHelper:DispatchQueueMsgs()
NetSystem:Update()
GameManager:Update()
QSGamePortal:Update()
Google.Protobuf.JsonFormatter:.ctor(Settings)
ZXing.Common.ChangeNotifyDictionary`2:set_Item(TKey, TValue)

====ERROR OVER====

[10/5/2024 9:30:15 PM][ERROR]
Catched:System.NullReferenceException: A null value was found where an object instance was required.
  at System.UriTypeConverter.ConvertTo (ITypeDescriptorContext context, System.Globalization.CultureInf