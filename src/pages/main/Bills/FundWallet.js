import React, { useRef, useContext } from "react";
import { Paystack, paystackProps } from "react-native-paystack-webview";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { AuthContext } from "../../../AuthProvider";
import Button from "../../../components/Button";
export default function FundWallet() {
  const { user } = useContext(AuthContext);
  const paystackWebViewRef = useRef(paystackProps.PayStackRef);

  const press = () => {
    paystackWebViewRef.current.startTransaction();
  };
  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
      <Paystack
        paystackKey="pk_test_7c371d93d1d4c27411cad38812b18a3533b6ff63"
        billingEmail={user.email}
        billingMobile="0123456789"
        billingName={user.name}
        amount={"2500.00"}
        onCancel={(e) => {
          console.log("Payment Cancelled");
        }}
        onSuccess={(res) => {
          console.log(res);
        }}
        ref={paystackWebViewRef}
      />

      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ alignItems: "center", marginBottom: 50 }}>
          <Image
            source={require("../../../../assets/images/wallet.png")}
            style={{ width: 200, height: 200 }}
          />
        </View>
        <Button text="Fund Now" press={press} />
      </View>
    </View>
  );
}
