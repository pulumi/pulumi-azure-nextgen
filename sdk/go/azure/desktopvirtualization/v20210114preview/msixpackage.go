// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20210114preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Schema for MSIX Package properties.
type MSIXPackage struct {
	pulumi.CustomResourceState

	// User friendly Name to be displayed in the portal.
	DisplayName pulumi.StringPtrOutput `pulumi:"displayName"`
	// VHD/CIM image path on Network Share.
	ImagePath pulumi.StringPtrOutput `pulumi:"imagePath"`
	// Make this version of the package the active one across the hostpool.
	IsActive pulumi.BoolPtrOutput `pulumi:"isActive"`
	// Specifies how to register Package in feed.
	IsRegularRegistration pulumi.BoolPtrOutput `pulumi:"isRegularRegistration"`
	// Date Package was last updated, found in the appxmanifest.xml.
	LastUpdated pulumi.StringPtrOutput `pulumi:"lastUpdated"`
	// The name of the resource
	Name pulumi.StringOutput `pulumi:"name"`
	// List of package applications.
	PackageApplications MsixPackageApplicationsResponseArrayOutput `pulumi:"packageApplications"`
	// List of package dependencies.
	PackageDependencies MsixPackageDependenciesResponseArrayOutput `pulumi:"packageDependencies"`
	// Package Family Name from appxmanifest.xml. Contains Package Name and Publisher name.
	PackageFamilyName pulumi.StringPtrOutput `pulumi:"packageFamilyName"`
	// Package Name from appxmanifest.xml.
	PackageName pulumi.StringPtrOutput `pulumi:"packageName"`
	// Relative Path to the package inside the image.
	PackageRelativePath pulumi.StringPtrOutput `pulumi:"packageRelativePath"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringOutput `pulumi:"type"`
	// Package Version found in the appxmanifest.xml.
	Version pulumi.StringPtrOutput `pulumi:"version"`
}

// NewMSIXPackage registers a new resource with the given unique name, arguments, and options.
func NewMSIXPackage(ctx *pulumi.Context,
	name string, args *MSIXPackageArgs, opts ...pulumi.ResourceOption) (*MSIXPackage, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.HostPoolName == nil {
		return nil, errors.New("invalid value for required argument 'HostPoolName'")
	}
	if args.MsixPackageFullName == nil {
		return nil, errors.New("invalid value for required argument 'MsixPackageFullName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:desktopvirtualization/v20200921preview:MSIXPackage"),
		},
		{
			Type: pulumi.String("azure-nextgen:desktopvirtualization/v20201019preview:MSIXPackage"),
		},
		{
			Type: pulumi.String("azure-nextgen:desktopvirtualization/v20201102preview:MSIXPackage"),
		},
		{
			Type: pulumi.String("azure-nextgen:desktopvirtualization/v20201110preview:MSIXPackage"),
		},
	})
	opts = append(opts, aliases)
	var resource MSIXPackage
	err := ctx.RegisterResource("azure-nextgen:desktopvirtualization/v20210114preview:MSIXPackage", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetMSIXPackage gets an existing MSIXPackage resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetMSIXPackage(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *MSIXPackageState, opts ...pulumi.ResourceOption) (*MSIXPackage, error) {
	var resource MSIXPackage
	err := ctx.ReadResource("azure-nextgen:desktopvirtualization/v20210114preview:MSIXPackage", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering MSIXPackage resources.
type msixpackageState struct {
	// User friendly Name to be displayed in the portal.
	DisplayName *string `pulumi:"displayName"`
	// VHD/CIM image path on Network Share.
	ImagePath *string `pulumi:"imagePath"`
	// Make this version of the package the active one across the hostpool.
	IsActive *bool `pulumi:"isActive"`
	// Specifies how to register Package in feed.
	IsRegularRegistration *bool `pulumi:"isRegularRegistration"`
	// Date Package was last updated, found in the appxmanifest.xml.
	LastUpdated *string `pulumi:"lastUpdated"`
	// The name of the resource
	Name *string `pulumi:"name"`
	// List of package applications.
	PackageApplications []MsixPackageApplicationsResponse `pulumi:"packageApplications"`
	// List of package dependencies.
	PackageDependencies []MsixPackageDependenciesResponse `pulumi:"packageDependencies"`
	// Package Family Name from appxmanifest.xml. Contains Package Name and Publisher name.
	PackageFamilyName *string `pulumi:"packageFamilyName"`
	// Package Name from appxmanifest.xml.
	PackageName *string `pulumi:"packageName"`
	// Relative Path to the package inside the image.
	PackageRelativePath *string `pulumi:"packageRelativePath"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type *string `pulumi:"type"`
	// Package Version found in the appxmanifest.xml.
	Version *string `pulumi:"version"`
}

type MSIXPackageState struct {
	// User friendly Name to be displayed in the portal.
	DisplayName pulumi.StringPtrInput
	// VHD/CIM image path on Network Share.
	ImagePath pulumi.StringPtrInput
	// Make this version of the package the active one across the hostpool.
	IsActive pulumi.BoolPtrInput
	// Specifies how to register Package in feed.
	IsRegularRegistration pulumi.BoolPtrInput
	// Date Package was last updated, found in the appxmanifest.xml.
	LastUpdated pulumi.StringPtrInput
	// The name of the resource
	Name pulumi.StringPtrInput
	// List of package applications.
	PackageApplications MsixPackageApplicationsResponseArrayInput
	// List of package dependencies.
	PackageDependencies MsixPackageDependenciesResponseArrayInput
	// Package Family Name from appxmanifest.xml. Contains Package Name and Publisher name.
	PackageFamilyName pulumi.StringPtrInput
	// Package Name from appxmanifest.xml.
	PackageName pulumi.StringPtrInput
	// Relative Path to the package inside the image.
	PackageRelativePath pulumi.StringPtrInput
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringPtrInput
	// Package Version found in the appxmanifest.xml.
	Version pulumi.StringPtrInput
}

func (MSIXPackageState) ElementType() reflect.Type {
	return reflect.TypeOf((*msixpackageState)(nil)).Elem()
}

type msixpackageArgs struct {
	// User friendly Name to be displayed in the portal.
	DisplayName *string `pulumi:"displayName"`
	// The name of the host pool within the specified resource group
	HostPoolName string `pulumi:"hostPoolName"`
	// VHD/CIM image path on Network Share.
	ImagePath *string `pulumi:"imagePath"`
	// Make this version of the package the active one across the hostpool.
	IsActive *bool `pulumi:"isActive"`
	// Specifies how to register Package in feed.
	IsRegularRegistration *bool `pulumi:"isRegularRegistration"`
	// Date Package was last updated, found in the appxmanifest.xml.
	LastUpdated *string `pulumi:"lastUpdated"`
	// The version specific package full name of the MSIX package within specified hostpool
	MsixPackageFullName string `pulumi:"msixPackageFullName"`
	// List of package applications.
	PackageApplications []MsixPackageApplications `pulumi:"packageApplications"`
	// List of package dependencies.
	PackageDependencies []MsixPackageDependencies `pulumi:"packageDependencies"`
	// Package Family Name from appxmanifest.xml. Contains Package Name and Publisher name.
	PackageFamilyName *string `pulumi:"packageFamilyName"`
	// Package Name from appxmanifest.xml.
	PackageName *string `pulumi:"packageName"`
	// Relative Path to the package inside the image.
	PackageRelativePath *string `pulumi:"packageRelativePath"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Package Version found in the appxmanifest.xml.
	Version *string `pulumi:"version"`
}

// The set of arguments for constructing a MSIXPackage resource.
type MSIXPackageArgs struct {
	// User friendly Name to be displayed in the portal.
	DisplayName pulumi.StringPtrInput
	// The name of the host pool within the specified resource group
	HostPoolName pulumi.StringInput
	// VHD/CIM image path on Network Share.
	ImagePath pulumi.StringPtrInput
	// Make this version of the package the active one across the hostpool.
	IsActive pulumi.BoolPtrInput
	// Specifies how to register Package in feed.
	IsRegularRegistration pulumi.BoolPtrInput
	// Date Package was last updated, found in the appxmanifest.xml.
	LastUpdated pulumi.StringPtrInput
	// The version specific package full name of the MSIX package within specified hostpool
	MsixPackageFullName pulumi.StringInput
	// List of package applications.
	PackageApplications MsixPackageApplicationsArrayInput
	// List of package dependencies.
	PackageDependencies MsixPackageDependenciesArrayInput
	// Package Family Name from appxmanifest.xml. Contains Package Name and Publisher name.
	PackageFamilyName pulumi.StringPtrInput
	// Package Name from appxmanifest.xml.
	PackageName pulumi.StringPtrInput
	// Relative Path to the package inside the image.
	PackageRelativePath pulumi.StringPtrInput
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName pulumi.StringInput
	// Package Version found in the appxmanifest.xml.
	Version pulumi.StringPtrInput
}

func (MSIXPackageArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*msixpackageArgs)(nil)).Elem()
}

type MSIXPackageInput interface {
	pulumi.Input

	ToMSIXPackageOutput() MSIXPackageOutput
	ToMSIXPackageOutputWithContext(ctx context.Context) MSIXPackageOutput
}

func (*MSIXPackage) ElementType() reflect.Type {
	return reflect.TypeOf((*MSIXPackage)(nil))
}

func (i *MSIXPackage) ToMSIXPackageOutput() MSIXPackageOutput {
	return i.ToMSIXPackageOutputWithContext(context.Background())
}

func (i *MSIXPackage) ToMSIXPackageOutputWithContext(ctx context.Context) MSIXPackageOutput {
	return pulumi.ToOutputWithContext(ctx, i).(MSIXPackageOutput)
}

type MSIXPackageOutput struct {
	*pulumi.OutputState
}

func (MSIXPackageOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*MSIXPackage)(nil))
}

func (o MSIXPackageOutput) ToMSIXPackageOutput() MSIXPackageOutput {
	return o
}

func (o MSIXPackageOutput) ToMSIXPackageOutputWithContext(ctx context.Context) MSIXPackageOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(MSIXPackageOutput{})
}
