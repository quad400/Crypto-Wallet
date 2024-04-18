import { View, Text, Image, Pressable, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  Buy,
  Filter,
  QRScanner,
  Receive,
  TrendDown,
  TrendUp,
} from "../../constants/Icons";
import Colors from "../../constants/Colors";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { Dollar } from "../../utils";
import { trade } from "../../constants/Data";

const Home = () => {
  return (
    <>
      <StatusBar style="light" backgroundColor="black" />
      <SafeAreaView className="bg-gray900 w-full h-full">
        <View className="flex-row justify-between items-center mt-3 px-4">
          <Image source={Filter} className="h-6 w-6" tintColor="#9493AC" />
          <Image source={QRScanner} className="h-6 w-6" tintColor="#9493AC" />
        </View>
        <ScrollView className="h-full">
          <View className="mt-6 justify-center items-center">
            <View className="flex-row justify-center items-end space-x-4">
              <Text className="text-[16px] text-gray100 font-jakatarMedium">
                TOTAL BALANCE
              </Text>
              <Entypo name="eye" size={24} color={Colors.gray100} />
            </View>
            <View className="mt-3 mb-5">
              <Text className="text-white text-2xl font-jakatarMedium">
                {Dollar.format(3000)}
              </Text>
            </View>

            <View className="flex-row space-x-6 justify-center items-center">
              <View className="flex-col justify-center items-center">
                <Pressable className="h-12 w-12 justify-center items-center bg-primary rounded-full">
                  <Ionicons name="arrow-redo-sharp" size={26} color="white" />
                </Pressable>
                <Text className="text-gray100 text-sm font-jakatarRegular mt-4">
                  SEND
                </Text>
              </View>
              <View className="flex-col justify-center items-center">
                <Pressable className="h-12 w-12 justify-center items-center bg-primary rounded-full">
                  <Image source={Receive} className="h-6 w-6" />
                </Pressable>
                <Text className="text-gray100 text-sm font-jakatarRegular mt-4">
                  RECEIVE
                </Text>
              </View>
              <View className="flex-col justify-center items-center">
                <Pressable className="h-12 w-12 justify-center items-center bg-primary rounded-full">
                  <Image source={Buy} className="h-6 w-6" />
                </Pressable>
                <Text className="text-gray100 text-sm font-jakatarRegular mt-4">
                  BUY
                </Text>
              </View>
            </View>
          </View>
          <View className="bg-gray700 w-full py-8 mt-8 h-full rounded-t-2xl px-4 space-y-4">
            {trade.map((item) => {
              return (
                <View className="border-b border-gray500 py-2.5 rounded-lg">
                  <View className="flex-row justify-between items-end">
                    <View className="flex-row justify-start items-start space-x-2 w-1/3">
                      <View className="flex justify-center items-center bg-gray-600 h-8 w-8 rounded-full">
                        <Image
                          source={item.symbol}
                          className="h-4 w-4"
                          resizeMode="contain"
                        />
                      </View>
                      <View className="flex-col justify-start items-start">
                        <Text numberOfLines={1} ellipsizeMode="tail" className="text-white text-[16px] font-jakatarMedium">
                          {item.name}
                        </Text>
                        <Text numberOfLines={1} ellipsizeMode="tail" className="text-gray100 text-xs font-jakatarRegular">
                          {Dollar.format(item.dollarPrice)}
                        </Text>
                      </View>
                    </View>
                    <View className="flex-row space-x-2 justify-center items-center">
                      <Image
                        source={item?.trend === "up" ? TrendUp : TrendDown}
                        tintColor={
                          item?.trend === "up"
                            ? Colors.secondaryGreen
                            : Colors.secondaryRed
                        }
                        className="h-4 w-4"
                        resizeMode="contain"
                      />
                      <Text
                        className={`${
                          item.trend === "up"
                            ? "text-secondaryGreen"
                            : "text-secondaryRed"
                        } text-xs font-jakatarRegular`}
                      >
                        {item.rate}%
                      </Text>
                    </View>
                    <View className="flex-col justify-end items-end">
                      <Text className="text-white text-sm font-jakatarRegular">
                        0 {item.acronym}
                      </Text>
                      <Text className="text-xs text-gray100 font-jakatarRegular">
                      {Dollar.format(0).split(".")[0]}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
