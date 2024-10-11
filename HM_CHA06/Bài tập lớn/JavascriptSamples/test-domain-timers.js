ext context, DataTable.Gen.BuffBehaviorAtomOptimized atom) [0x00000] in <filename unknown>:0 
  at BuffBehaviorProcessor.AddBuff (.BuffInstance inst, Int32 behaviorId, Boolean silent, Boolean reactive) [0x00000] in <filename unknown>:0 
  at Player.OnBuffChange (.BuffInstance inst, EBuffChangeType type, Boolean silent, Boolean forceStop) [0x00000] in <filename unknown>:0 
  at BaseInfo.AddBuff (.BuffInstance inst, Boolean restore, Boolean silent) [0x00000] in <filename unknown>:0 
  at Player.SyncBuffInfo (IList`1 buffs) [0x00000] in <filename unknown>:0 
  at Modules.MMO.BuffAndCDModel.<MsgEvents>m__2 (Int32 msgId, IMessage msg) [0x00000] in <filename unknown>:0 
  at Net.NetConnectionHelper.DispatchMsg (Int32 msgId, IMessage msgForCs, Net.LuaProtobufBytes msgForLua) [0x00000] in <filename unknown>:0 
  at Net.NetConnectionHelper.ProcessQueueMessage (Net.MessageData message) [0x00000] in <filename unknown>:0 
  at Net.NetConnectionHelper.DispatchQueueMsgs () [0x00000] in <filename unknown>:0 
  at NetSystem.Update () [0x00000] in <filename unknown>:0 
  at GameManager.Update () [0x00000] in <filename unknown>:0 
  at QSGamePortal.Update () [0x00000] in <filename unknown>:0 
  at Google.Protobuf.JsonFormatter..ctor (Google.Protobuf.Settings settings) [0x00000] in <filename unknown>:0 
  at ZXing.Common.DecodingOptions+ChangeNotifyDictionary`2[TKey,TValue].set_Item (.TKey key, .TValue value) [0x00000] in <filename unknown>:0 
System.UriTypeConverter:ConvertTo(ITypeDescriptorContext, CultureInfo, Object, Type)
System.Diagnostics.StackTrace:init_frames(Int32, Boolean)
UnityEngine.StackTraceUtility:ExtractStringFromExceptionInternal(Object, String&, String&)
Google.Protobuf.JsonFormatter:.ctor(Settings)
ZXing.Common.ChangeNotifyDictionary`2:set_Item(TKey, TValue)
UnityEngine.Logger:LogException(Exception, Object)
UnityEngine.Debug:LogException(Exception)
QSBehaviorFactory:Create(BuffBehaviorContext, Bas