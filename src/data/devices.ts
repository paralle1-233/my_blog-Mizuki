// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = Record<string, Device[]> & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	iPhone: [
		{
			name: "iPhone 13 mini",
			image: "/images/device/iPhone13mini.jpg",
			specs: "Pink / 4G + 256G",
			description: "5.4 inch OLED 476 ppi HDR supported",
			link: "https://support.apple.com/zh-cn/111873",
		},
	],
	PC: [
		{
			name: "ASUS TX Air 2025",
			image: "/images/device/ASUSTXAIR.jpg",
			specs: "80W RTX5060 / AMD Ryzen AI 7 350 / silver",
			description:
				"14-inch 2.5K display with a 165Hz IPS screen, weighing 1.49kg",
			link: "https://www.asus.com/laptops/for-gaming/tuf-gaming/asus-tuf-gaming-a14-2025/",
		},
	],
};
