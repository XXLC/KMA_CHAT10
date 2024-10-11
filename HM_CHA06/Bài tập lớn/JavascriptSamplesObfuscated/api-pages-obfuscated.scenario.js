g&)
Google.Protobuf.JsonFormatter:.ctor(Settings)
ZXing.Common.ChangeNotifyDictionary`2:set_Item(TKey, TValue)
UnityEngine.Debug:LogException(Exception)
QSBehaviorFactory:Create(BuffBehaviorContext, BaseBehavior)
BuffBehaviorPackage:InstanceBuffBehavior(BuffBehaviorContext, BuffBehaviorAtomOptimized)
BuffBehaviorPackage:Recycle(BuffBehaviorContext, BuffBehaviorAtomOptimized)
BuffBehaviorPackage:Create(BuffBehaviorContext, BuffBehaviorAtomOptimized)
BuffBehaviorProcessor:AddBuff(BuffInstance, Int32, Boolean, Boolean)
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

[10/5/2024 9:28:17 PM][ERROR]
Catched:System.NullReferenceException: A null value was found where an object instance was required.
  at System.UriTypeConverter.ConvertTo (ITypeDescriptorContext context, System.Globalization.CultureInfo culture, System.Object value, System.Type destinationType) [0x00000] in <filename unknown>:0 
  at System.UriTypeConverter.ConvertTo (ITypeDescriptorContext context, System.Globalization.CultureInfo culture, System.Object value, System.Type destinationType) [0x00000] in <filename unknown>:0 
  at com.tencent.pandora.Logger..cctor () [0x00000] in <filename unknown>:0 
  at com.tencent.pandora.Logger..cctor () [0x00000] in <filename unknown>:0 
  at com.tencent.pandora.Logger..cctor () [0x00000] in <filename unknown>:0 
  at BuffEffectBehavior.OnBegin () [0x00000] in <filename unknown>:0 
  at QSBuffBehavior.Update (Single deltaTime) [0x00000] in <filename unknown>:0 
  at BuffBehaviorPackage.Update (Single deltaTime) [0x00000] in <filename unknown>:0 
  at BuffBehaviorProcessor.AddBuff (.BuffInstance inst, Int32 behaviorId, Boolean silent, Boolean reactive) [0x00000] in <filename unknown>:0 
  at Player.OnBuffChange (.BuffInstance inst, EBuffChangeType type, Boolean silent, Boolean forceStop) [0x00000] in <filename unknown>:0 
  at BaseInfo.AddBuff (.BuffInstance inst, Boolean restore, Boolean silent) [0x00000] in <filename unknown>:0 
  at Player.SyncBuffInfo (IList`1 buffs) [0x00000] in <filename unknown>:0 
  at