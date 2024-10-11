BuffInstance inst, EBuffChangeType type, Boolean silent, Boolean forceStop) [0x00000] in <filename unknown>:0 
  at BaseInfo.AddBuff (.BuffInstance inst, Boolean restore, Boolean silent) [0x00000] in <filename unknown>:0 
  at Player.SyncBuffInfo (IList`1 buffs) [0x00000] in <filename unknown>:0 
  at Modules.MMO.BuffAndCDModel.<MsgEvents>m__2 (Int32 msgId, IMessage msg) [0x00000] in <filename unknown>:0 
  at Net.NetConnectionHelper.DispatchMsg (Int32 msgId, IMessage msgForCs, Net.LuaProtobufBytes msgForLua) [0x00000] in <filename unknown>:0 
  at Net.NetConnectionHelper.ProcessQueueMessage (Net.MessageData message) [0x00000] in <filename unknown>:0 
  at Net.NetConnectionHelper.DispatchQueueMsgs () [0x00000] in <filename unknown>:0 
  at NetSystem.Update () [0x00000] in <filename unknown>:0 
  at GameManager.Update () [0x00000] in <filename unknown>:0 
  at QSGamePortal.Updat