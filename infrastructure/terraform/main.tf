provider "aws" {
  region = "us-east-1"
}

resource "aws_vpc" "nexus_vpc" {
  cidr_block = "10.0.0.0/16"
  enable_dns_hostnames = true
  
  tags = {
    Name = "Nexus-VPC"
  }
}

resource "aws_eks_cluster" "nexus_cluster" {
  name     = "nexus-production"
  role_arn = aws_iam_role.eks_cluster_role.arn

  vpc_config {
    subnet_ids = [aws_subnet.private_1.id, aws_subnet.private_2.id]
  }
}
