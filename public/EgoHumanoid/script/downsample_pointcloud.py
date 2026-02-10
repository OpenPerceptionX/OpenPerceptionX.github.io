"""
点云降采样脚本
使用 Open3D 对 pointcloud.ply 进行体素降采样（Voxel Downsampling）
"""

import argparse
import os
import open3d as o3d


def downsample(input_path, output_path, voxel_size):
    """
    对点云进行体素降采样

    参数:
        input_path: 输入点云文件路径
        output_path: 输出点云文件路径
        voxel_size: 体素大小，越大降采样越多（单位与点云坐标一致）
    """
    print(f"读取点云: {input_path}")
    pcd = o3d.io.read_point_cloud(input_path)
    original_count = len(pcd.points)
    print(f"原始点数: {original_count:,}")

    print(f"体素大小: {voxel_size}")
    pcd_down = pcd.voxel_down_sample(voxel_size=voxel_size)
    downsampled_count = len(pcd_down.points)
    ratio = downsampled_count / original_count * 100

    print(f"降采样后点数: {downsampled_count:,} ({ratio:.1f}%)")
    print(f"减少了: {original_count - downsampled_count:,} 个点")

    o3d.io.write_point_cloud(output_path, pcd_down, write_ascii=False)
    
    input_size = os.path.getsize(input_path) / (1024 * 1024)
    output_size = os.path.getsize(output_path) / (1024 * 1024)
    print(f"文件大小: {input_size:.1f}MB -> {output_size:.1f}MB")
    print(f"保存至: {output_path}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="点云降采样工具")
    parser.add_argument(
        "-i", "--input",
        default="pointcloud.ply",
        help="输入点云文件路径 (默认: pointcloud.ply)",
    )
    parser.add_argument(
        "-o", "--output",
        default="pointcloud_downsampled.ply",
        help="输出点云文件路径 (默认: pointcloud_downsampled.ply)",
    )
    parser.add_argument(
        "-v", "--voxel-size",
        type=float,
        default=0.01,
        help="体素大小，越大降采样越多 (默认: 0.01)",
    )
    args = parser.parse_args()

    downsample(args.input, args.output, args.voxel_size)
