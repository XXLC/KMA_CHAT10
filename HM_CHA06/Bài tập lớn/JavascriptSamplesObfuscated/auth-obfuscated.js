)

====ERROR OVER====

[10/5/2024 9:28:41 PM][ERROR]
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
  at BaseInfo.AddBuff (.BuffInstance inst, Boolean restore, Boolean silent) [0x000